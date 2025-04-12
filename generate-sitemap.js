// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const baseUrl = 'https://eqfira.online';

const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/blog'
];

const sitemap = new SitemapStream({ hostname: baseUrl });
const writeStream = createWriteStream('./public/sitemap.xml');

sitemap.pipe(writeStream);

routes.forEach(route => {
  sitemap.write({ url: route, changefreq: 'weekly', priority: 0.8 });
});

sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log('✅ Sitemap created at public/sitemap.xml');
});
