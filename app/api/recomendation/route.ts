import { getSearchResults } from "@/app/actions/search.action";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const query = req.nextUrl.searchParams.get('q');
    
    try {
        if (query) {
            const response = await getSearchResults(query as string);
            console.log(response);

            // Create a response object
            const apiResponse = {
                success: response ? true : false,
                error: response ? "" : "No results found.",
                response: response || {}
            };

            // Create the NextResponse and set CORS headers
            const nextResponse = NextResponse.json(apiResponse);
            nextResponse.headers.set('Access-Control-Allow-Origin', '*'); // Allow all origins or specify the origin you want
            nextResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
            nextResponse.headers.set('Access-Control-Allow-Headers', 'X-Requested-With, content-type');

            return nextResponse;
        } else {
            const apiResponse = {
                success: false,
                error: "Query is not provided.",
                response: {}
            };

            const nextResponse = NextResponse.json(apiResponse);
            nextResponse.headers.set('Access-Control-Allow-Origin', '*'); // Allow all origins or specify the origin you want
            nextResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
            nextResponse.headers.set('Access-Control-Allow-Headers', 'X-Requested-With, content-type');

            return nextResponse;
        }
    } catch (err) {
        const apiResponse = {
            success: false,
            response: {},
            error: `Something went wrong: ${err}`
        };

        const nextResponse = NextResponse.json(apiResponse);
        nextResponse.headers.set('Access-Control-Allow-Origin', '*'); // Allow all origins or specify the origin you want
        nextResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        nextResponse.headers.set('Access-Control-Allow-Headers', 'X-Requested-With, content-type');

        return nextResponse;
    }
}
