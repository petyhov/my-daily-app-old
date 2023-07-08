import { NextResponse } from 'next/server';

import { routes } from './configs';

export default function middleware(request) {
  const { pathname } = request.nextUrl;
  console.log('middleware', pathname);
  if (!request.cookies.has('userData') && pathname !== routes.login) {
    // return NextResponse.redirect(new URL(routes.login, request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: '/((?!_next|api/auth).*)(.+)' };
