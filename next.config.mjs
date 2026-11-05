/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  // Lint runs as its own gate (bun run lint); the build should not re-run it.
  eslint: { ignoreDuringBuilds: true },
  // Inline the (small) Tailwind stylesheet so first paint does not wait on a CSS request.
  experimental: { inlineCss: true },
}

export default nextConfig
