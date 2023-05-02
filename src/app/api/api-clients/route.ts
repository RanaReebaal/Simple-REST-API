

import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';


export async function POST(request: NextRequest) {
  const req = await request.json();
  const userName = req.clientName;
  const userEmail = req.clientEmail;
  const secretKey = 'my-secret-key';
  
  if(userName && userEmail){
    const payload = {
      userName,
      userEmail,
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7) // 7 days in seconds
    };
    const token = jwt.sign(payload, secretKey);
    
    return NextResponse.json({accesskey: token});
  }
  else {
    return NextResponse.json({MSG: "Invalid Command, try using a different method!"}) 
  }
}




