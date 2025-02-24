import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Obtener la cabecera del host
  const hostname = request.headers.get("host") || ""

  // Verificar si es una solicitud de API
  const isApiRequest = request.nextUrl.pathname.startsWith("/api")

  // Configurar cabeceras de seguridad
  const response = NextResponse.next()

  // Agregar cabeceras de seguridad
  const headers = response.headers
  headers.set("X-DNS-Prefetch-Control", "on")
  headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload")
  headers.set("X-Frame-Options", "DENY")
  headers.set("X-Content-Type-Options", "nosniff")
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), interest-cohort=()")

  // Configurar CSP solo para páginas HTML (no para API o assets)
  if (!isApiRequest) {
    headers.set(
      "Content-Security-Policy",
      `
        default-src 'self';
        script-src 'self' 'unsafe-eval' 'unsafe-inline';
        style-src 'self' 'unsafe-inline';
        img-src 'self' data: blob: https:;
        font-src 'self';
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        block-all-mixed-content;
        upgrade-insecure-requests;
      `
        .replace(/\s+/g, " ")
        .trim(),
    )
  }

  // Redirigir www a non-www
  if (hostname.startsWith("www.")) {
    const newHost = hostname.replace("www.", "")
    return NextResponse.redirect(`https://${newHost}${request.nextUrl.pathname}${request.nextUrl.search}`)
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api/ routes
     * 2. /_next/ (Next.js internals)
     * 3. /_static (inside /public)
     * 4. /_vercel (Vercel internals)
     * 5. Static files (e.g. /favicon.ico, /sitemap.xml, /robots.txt)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
}

