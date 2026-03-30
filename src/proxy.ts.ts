import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(request: NextRequest) {
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
  // BLOCK LOGIN IF LOGGED IN
  // ===============================
  if (token && ["/login", "/register"].includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}