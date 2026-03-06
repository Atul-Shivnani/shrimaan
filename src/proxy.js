import { auth } from "@/auth";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isAdmin = pathname.startsWith("/admin");
  const isLogin = pathname.startsWith("/admin/login");
  const isLoggedIn = !!req.auth?.user;

  if (isAdmin && !isLogin && !isLoggedIn) {
    return Response.redirect(new URL("/admin/login", req.nextUrl));
  }

  if (isLogin && isLoggedIn) {
    return Response.redirect(new URL("/admin", req.nextUrl));
  }

  return undefined;
});

export const config = {
  matcher: ["/admin/:path*"],
};
