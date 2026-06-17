/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // The original portfolio images are still hosted on Netlify, so we reference
    // them remotely and let next/image optimize them. When you're ready, drop the
    // files into /public/images and switch these to local "/images/..." paths.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "leeyang.netlify.app",
        pathname: "/assets/images/**",
      },
    ],
  },
};

export default nextConfig;
