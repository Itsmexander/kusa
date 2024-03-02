import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";



const urlRoleCanAccess = [
  {
    startPath: "/CLUB",
    role: ["CLUB","SAB","SC","SD"],
  },
  {
    startPath: "/SAB",
    role: ["CLUB","SAB","SC","SD"],
  },
  {
    startPath: "/SC",
    role: ["CLUB","SAB","SC","SD"],
  },
  {
    startPath: "/SD",
    role: ["CLUB","SAB","SC","SD"],
  },
];

export default withAuth(
  async function middleware(req) {
    for (const url of urlRoleCanAccess) {
      if (req.nextUrl.pathname.startsWith(url.startPath)) {
        if (url.role.includes(req.nextauth.token?.role ?? "")) {
          return NextResponse.next();
        }
      }
    }

    return NextResponse.redirect(new URL("/404", req.url));
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (token) {
          return true;
        }
        return false;
      },
    },
  },
);

export const config = {
  matcher: [
    "/CLUB",
    "/SAB",
    "/SC",
    "/SD",
    "/CLUB/:path*",
    "/SAB/:path*",
    "/SC/:path*",
    "/SD/:path*",
  ],
};
