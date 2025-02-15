import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port:'',
      }
    ]
  },
  
  sassOptions:{
    additionaData: `$var red;`
  },

  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
