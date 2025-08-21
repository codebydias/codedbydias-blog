import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const password = req.headers.get("x-blog-password") || req.nextUrl.searchParams.get("password")

  if (password !== process.env.NEXT__BLOG_SECRET_PASSWORD) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  return NextResponse.next()
}

// config para aplicar apenas na path q eu decidir 
export const config = {
  matcher: "/blog/admin/:path*",
}
