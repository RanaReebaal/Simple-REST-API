
// import { NextRequest, NextResponse } from "next/server";


// export function middleware(request: Request) {
//     console.log("middleware");
//     console.log(request.method);
//     console.log(request.url);
//     const origin = request.headers.get("origin");
//     console.log(origin);
//     return NextResponse.next();

// }

// export const config = {
//     matcher: ['/api/:path*',]
// }



// import jwt from 'jsonwebtoken';
// const secretKey = 'my-secret-key';
// const auth = (req: NextRequest) => {
//     try {
//         let token = req.headers.authorization;
//         if (token) {
//             token = token.split(' ')[1];
//             let user = jwt.verify(token, secretKey);

//         }
//         else {
//             NextResponse.json({ MSG: "Unauthorized USER" });
//         }
//         NextResponse.next();

//     } catch (error) {
//         console.log(error);
//         NextResponse.json({ MSG: "Unauthorized USER" });
//     }
// }







// import jwt from 'jsonwebtoken';
// const secretKey = 'my-secret-key';
// const auth = (req: NextRequest) => {
//     try {
//         let token = req.headers.get("authorization");
//         if (token) {
//             token = token.split(' ')[1];
//             let user = jwt.verify(token, secretKey);
//             console.log(user);


//         }
//         else {
//             NextResponse.json({ MSG: "Unauthorized USER" });
//         }
//         NextResponse.next();

//     } catch (error) {
//         console.log(error);
//         NextResponse.json({ MSG: "Unauthorized USER" });
//     }
// }






// export async function POST(request: NextRequest) {
//     let token = request.headers.get("authorization");
//     if (token) {
//         token = token.split(' ')[1];
//         let user = jwt.verify(token, secretKey);
//         console.log(user);
//         NextResponse.next();
//     }
//     else {
//         NextResponse.json({ MSG: "Unauthorized USER" });
//     }
//     return NextResponse.json({msg: 'Invalid'});
// }





import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
const secretKey = 'my-secret-key';

export function middleware(request: Request) {
    console.log("middleware");
    console.log(request.method);
    console.log(request.url);
    const token = request.headers.get("authorization");
    console.log(token);
    if (token) {
        let tok_spl = token.split(' ')[1];
        if (tok_spl.length > 180) {
            return NextResponse.next();
        }
        else{
            return NextResponse.json({msg: "Invalid authorization token."});
        }
        // console.log(tok_spl);
        // let ver = jwt.verify(tok_spl, secretKey);
        // return NextResponse.next();
    }
    else {
        return NextResponse.json({msg: "Please provide the authorization token first."});
        // return NextResponse.next();

    }


}

export const config = {
    matcher: ['/api/orders/:path*',]
}