import { NextResponse } from "next/server"

const post=[
    {
        "userId":1,
        "id":1,
        "title":"Post 1 by UserId 1",
        "body":"This is post 1 by UserId 1"
    },{
        "userId":2,
        "id":2,
        "title":"Post 2 by UserId 2",
        "body":"This is post 2 by UserId 2"
    },{
        "userId":3,
        "id":3,
        "title":"Post 3 by UserId 3",
        "body":"This is post 3 by UserId 3"
    },{
        "userId":4,
        "id":4,
        "title":"Post 4 by UserId 4",
        "body":"This is post 4 by UserId 4"
    }
]

export const GET=()=>{
    return NextResponse.json(post);
}
