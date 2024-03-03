import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const { pathname } = request.nextUrl;

  const authToken = request.cookies.get("bisuddho_auth");

  if (!authToken || authToken === null || authToken === undefined) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/notification",
    "/admin/addProduct",
    "/admin/orders",
    "/admin/users",
  ],
};
