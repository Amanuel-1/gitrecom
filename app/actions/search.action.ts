'use server'

import { queryPipecone } from "@/utils/pinecone"
import { Octokit } from 'octokit'
import { RestEndpointMethodTypes} from '@octokit/plugin-rest-endpoint-methods'

export type OctoResponse = RestEndpointMethodTypes['repos']['get']['response']['data']


export const getSearchResults = async (searchQuery: string) => {
    
    const okto = new Octokit({ auth: process.env.GITHUB_PERSONAL_TOKEN! })
    const response = await queryPipecone(searchQuery as string, 'git-repo-index', 15)
    const results:OctoResponse[] = []

    console.log("environment variable " ,process.env.GITHUB_PERSONAL_TOKEN)

    await Promise.all(response.map(async (res) => {
        // Use RegExp object for the match method
        const urlPattern = /https:\/\/github\.com\/([^\/]+)\/([^\/]+)/;
        const urlMatch = (res.metadata?.URL as string).match(urlPattern);

        if (urlMatch) {
            const [_, owner, repo] = urlMatch;

            try {
                const repoData = await okto.request('GET /repos/{owner}/{repo}', {
                    owner,
                    repo,
                    headers: {
                        'X-GitHub-Api-Version': '2022-11-28'
                    }
                });
               
                results.push(repoData.data as OctoResponse)
            } catch (error) {
                console.error('Error fetching repo data:', error);
            }
        } else {
            console.error('URL did not match pattern:', res.metadata?.url);
        }
    }));

    return results
}
