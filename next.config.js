/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    PGHOST: "ep-wild-king-958594.us-east-2.aws.neon.tech",
    PGDATABASE: "neondb",
    PGUSER: "rebaalhussain",
    PGPASSWORD: "RDm6MIeNvjJ1",
  },
};

module.exports = nextConfig;
