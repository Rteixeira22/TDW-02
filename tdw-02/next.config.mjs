/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true // Para permitir imagens não otimizadas
  },

  output: "export", // Configura a exportação estática
  distDir: "out"    // Define a pasta de saída como "out"
};

export default nextConfig;
