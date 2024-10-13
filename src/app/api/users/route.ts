import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        "name": "Syed Saqlain Haider",
        "contactNum": "9823324353"
    },
    {
        "name": "Ali Haider",
        "contactNum": "3423532523523"
    }
];

export const GET = () => {
    return NextResponse.json(data);
}


export const POST = async (request: NextRequest) => {
    const req = await request.json();
    data.push(req);
    return NextResponse.json({ "msg": "Successfully, new User Registered!.." });
}