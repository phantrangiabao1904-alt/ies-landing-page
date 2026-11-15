import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authToken =
    request.cookies.get('sb-access-token')?.value ||
    request.cookies.get('sb-auth-token')?.value;

  if (pathname.startsWith('/admin') && !authToken) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    loginUrl.searchParams.set('error', 'unauthorized_admin');
    return NextResponse.redirect(loginUrl);
  }

  if (
    (pathname.startsWith('/ba-dashboard') || pathname.startsWith('/analytics')) &&
    !authToken
  ) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    loginUrl.searchParams.set('error', 'unauthorized_ba');
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/ba-dashboard/:path*', '/analytics/:path*'],
};
