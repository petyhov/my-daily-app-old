import { NextResponse } from 'next/server';

import { routes } from './configs';

export default function middleware(request) {
  const { pathname } = request.nextUrl;
  console.log('pathname', pathname);

  if (!request.cookies.has('userData') && pathname !== routes.login) {
    return NextResponse.redirect(new URL(routes.login, request.url));
  }

  if (request.cookies.has('userData')) {
    if (pathname === routes.login) {
      return NextResponse.redirect(new URL(routes.dashboard, request.url));
    }
    const userData = request.cookies.get('userData');
    const permissionsRoutes = JSON.parse(userData.value).permissions;
    const allRoutes = Object.values(routes);
    console.log(allRoutes.includes(pathname));
    if (
      allRoutes.includes(pathname) &&
      !permissionsRoutes.includes(pathname) &&
      pathname !== routes.dashboard
    ) {
      console.log('THIS3');

      return NextResponse.redirect(new URL(routes.dashboard, request.url));
    }
  }

  return NextResponse.next();
}

export const config = { matcher: '/((?!_next|api/auth).*)(.+)' };
