import { getSearchResults } from "@/app/actions/search.action";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get('q');

    try {
        if (query) {
            const response = await getSearchResults(query as string);
            console.log(response);

            if (response) {
                return NextResponse.json({
                    success: true,
                    error: "",
                    response
                });
            } else {
                return NextResponse.json({
                    success: false,
                    error: "No results found.",
                    response: {}
                });
            }
        } else {
            return NextResponse.json({
                success: false,
                error: "Query is not provided.",
                response: {}
            });
        }
    } catch (err) {
        return NextResponse.json({
            success: false,
            response: {},
            error: `Something went wrong: ${err}`
        });
    }
}
