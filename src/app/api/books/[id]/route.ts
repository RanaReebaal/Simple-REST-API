
import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

interface Params {
    id: any;
  }

export async function GET(request: NextRequest, { params }: { params: Params }) {
    if (params.id >= 1 && params.id <= 15 ) {
        const conn = postgres({
            ssl: require,
        });
        const result = await conn.unsafe("SELECT * FROM books_api");
        console.log("ID entered", params.id);
        return new NextResponse(JSON.stringify(result[Number(params.id) - Number(1)]));
    }
    else {
        return NextResponse.json({
            Note: "We have books stock only available from id no 1-15, try a number between that!"
        });
    }

}




