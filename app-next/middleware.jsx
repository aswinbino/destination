import { NextResponse } from 'next/server';

export function middleware(request) {
    const path = request.nextUrl.pathname;

    // Basic mock auth check
    const isPublicPath = path === '/login' || path === '/register' || path === '/';
    const token = request.cookies.get('token')?.value || '';

    if (path.startsWith('/dashboard') && !token) {
        // For demo purposes, we won't actually redirect yet to allow testing
        // return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/booking/:path*',
    ],
};
