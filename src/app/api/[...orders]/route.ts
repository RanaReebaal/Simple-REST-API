


import randomstring from 'randomstring';
import { NextRequest, NextResponse } from "next/server";



const Reserved_orders: any = [];

interface Params {
  orders: any;
}




export async function GET(request: NextRequest, { params }: { params: Params }) {

  if (params.orders[0] === 'orders' && params.orders.length === 1) {
    return NextResponse.json({ Reserved_orders });
  }
  else if (params.orders[0] === 'orders' && params.orders.length === 2) {

    const idToFind = params.orders[1];
    for (let i = 0; i < Reserved_orders.length; i++) {
      const order = Reserved_orders[i];
      if (order.Id === idToFind) {
        return NextResponse.json({ order });
      }
    }
  }
  else {
    return NextResponse.json({
      Msg: "Inavlid Command Error"
    });
  }

}
export async function POST(request: NextRequest, { params }: { params: Params }) {

  if (params.orders[0] === 'orders' && params.orders.length === 1) {
    const req = await request.json();

    let userId = req.bookId;
    let userName = req.customerName;
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    let r_str = randomstring.generate(5);
    Reserved_orders.push({
      Id: r_str,
      Created: true,
      BookId: userId,
      CustomerName: userName,
      OrderTime: currentTime
    });
    if (userId && userName) {
      return NextResponse.json({
        Id: r_str,
        Created: true
      });
    }
    else {
      return NextResponse.json({
        Msg: "Enter the data in proper format..."
      });
    }
  }
  else if (params.orders[0] === 'orders' && params.orders.length === 2) {
    return NextResponse.json({
      Note: "this is to get order by id!"
    });
  }
  else {
    return NextResponse.json({
      Note: "Invalid command"
    });
  }

}
export async function DELETE(request: NextRequest, { params }: { params: Params }) {

  if (params.orders[0] === 'orders' && params.orders.length === 1) {
    return NextResponse.json({ Msg: "Inavlid Command Error" });
  }
  else if (params.orders[0] === 'orders' && params.orders.length === 2) {
    console.log(params.orders[1]);
    const idToFind = params.orders[1];
    for (let i = 0; i < Reserved_orders.length; i++) {
      console.log(Reserved_orders.length);
      const order = Reserved_orders[i];
      if (order.Id === idToFind) {
        Reserved_orders.splice(i, 1);
        return NextResponse.json({ Msg: "Id found and order removed" });
      }
    }
  }
  else {
    return NextResponse.json({
      Msg: "Inavlid Command Error"
    });
  }

}
export async function PATCH(request: NextRequest, { params }: { params: Params }) {
  const req = await request.json();
  if (params.orders[0] === 'orders' && params.orders.length === 1) {
    return NextResponse.json({ Msg: "Inavlid Command Error" });
  }
  else if (params.orders[0] === 'orders' && params.orders.length === 2) {
    console.log(params.orders[1]);
    const idToFind = params.orders[1];
    for (let i = 0; i < Reserved_orders.length; i++) {
      console.log(Reserved_orders.length);
      const order = Reserved_orders[i];
      if (order.Id === idToFind) {
        order.CustomerName = req.customerName;
        return NextResponse.json({ Msg: "Id found and order Updated" });
      }
    }
  }
  else {
    return NextResponse.json({
      Msg: "Inavlid Command Error"
    });
  }

}
















// export async function DELETE(request: NextRequest) {
//   const req = await request.json();
//   if(req.name){
//     return NextResponse.json({
//       To: "Zia",
//       Message: "I have deleted the greetings",
//       RequestType: "DELETE",
//       DeleterName: req.name
//     });
//   }
//   else {
//     return new NextResponse('Please include your name in the DELETE request');
//   }
// }


// export async function DELETE(request: NextRequest) {
//   const req = await request.json();
//   orders.push(req);

//   let userId = req.bookId;
//   let userName = req.customerName;

//   if(userId && userName){
//     return NextResponse.json({
//       Id: id,
//       Created: true
//     });
//   }
//   else{
//     return NextResponse.json({
//       Msg: "Enter the data in proper format..."
//     });
//   }
// }