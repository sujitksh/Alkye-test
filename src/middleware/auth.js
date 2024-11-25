import { NextResponse } from "next/server";
export function authMiddleware(req) {
    const token = req.cookies.get("token");
    
    if (req.nextUrl.pathname.startsWith("/dashboard") && !token) {
        return NextResponse.redirect(new URL("/login/email", req.url));
    }
    if(token){
        if(req.nextUrl.pathname.startsWith("/login")){
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }
    }
    return NextResponse.next(); 
  }

  export const config = { 
    matcher: ["/dashboard/:path*"]
  };