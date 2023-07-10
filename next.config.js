/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    async rewrites() {
      return [
        {
          source: '/mail-subscribe',
          destination: 'https://gmail.us17.list-manage.com/subscribe/post?u=93a242fec4477bfb15bfdef9e&amp;id=ae65beb7a2&amp;f_id=003960e0f0',
        },
      ]
    },
  }
   
module.exports = nextConfig
