import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/women_wellness_selfcare',
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
