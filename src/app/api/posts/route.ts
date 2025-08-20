
import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const body = await req.json()

    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            published: true,
        },
    })

    return NextResponse.json(post)
}
