import {Pinecone} from '@pinecone-database/pinecone'



export const pc = new Pinecone({apiKey:process.env.PINECONE_API_KEY!});

const indexName = 'git-repo-index';
const createIndex= async(indexName:string) =>{
    await pc.createIndex({
    name: indexName,
    dimension: 768, //https://cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-text-embeddings#generative-ai-get-text-embedding-nodejs:~:text=The%20embedding%20dimension,embedding%2D004%20model
    metric: 'cosine',// TODO: I need to change this later
    spec: { 
      serverless: { 
        cloud: 'aws', 
        region: 'us-east-1' 
      }
    } 
})
}


