import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const TANJA_PORT = process.env.TANJA_PORT || 4001;

// Proxy /tanja to the Next.js app (run separately, see package.json "start")
app.use('/tanja', createProxyMiddleware({
  target: `http://localhost:${TANJA_PORT}`,
  changeOrigin: true,
  on: {
    proxyRes: (proxyRes) => {
      // Keep /tanja out of search results regardless of the app's own meta tags
      proxyRes.headers['x-robots-tag'] = 'noindex, nofollow';
    },
  },
}));

// Serve static files from the dist directory (includes sitemap.xml and robots.txt)
app.use(express.static(join(__dirname, 'dist')));

// Handle React Router (or any client-side routing)
app.get('/*any', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

