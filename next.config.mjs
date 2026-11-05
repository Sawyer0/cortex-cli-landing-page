/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  // Lint runs as its own gate (bun run lint); the build should not re-run it.
  eslint: { ignoreDuringBuilds: true },
  // The stylesheet ships as its own file. Inlining it (experimental.inlineCss) copies it twice into
  // every HTML document (a <style> tag plus the RSC payload), which pushed the /about document past
  // one TCP round trip on a cold mobile connection.
}

export default nextConfig
