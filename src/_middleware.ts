import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value
  const { pathname } = request.nextUrl

  // ===============================
  // PUBLIC ROUTES
  // ===============================
  const publicRoutes = [
    "/",
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
  ]

  const isPublic = publicRoutes.includes(pathname)

  // ===============================
  // PROTECT PRIVATE ROUTES
  // ===============================
  if (!token && !isPublic) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // ===============================
  // BLOCK LOGIN IF ALREADY LOGIN
  // ===============================
  if (token && ["/login", "/register"].includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}