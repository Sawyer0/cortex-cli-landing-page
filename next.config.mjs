/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  // Lint runs as its own gate (bun run lint); the build should not re-run it.
  eslint: { ignoreDuringBuilds: true },
}

export default nextConfig
