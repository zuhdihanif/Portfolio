/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_ENV === 'GH_PAGES';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: isGithubPages ? '/portfolio/' : '',
  basePath: isGithubPages ? '/portfolio' : '',
  output: 'export',
};

export default nextConfig;
