import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function GET(request: NextRequest) {
    const url = request.nextUrl;
    if (url.searchParams.has("limit")) {
        const limit = url.searchParams.get("limit");
        const conn = postgres({
            ssl: require,
        });
        const result = await conn.unsafe("SELECT * FROM books_api");
        console.log("limit given:", limit);
        return new NextResponse(JSON.stringify(result.slice(0, Number(limit))));
    }
    else {
        const conn = postgres({
            ssl: require,
        });
        const result = await conn.unsafe("SELECT * FROM books_api");
        console.log("backend result", result);
        return new NextResponse(JSON.stringify(result));
    }
}
    





