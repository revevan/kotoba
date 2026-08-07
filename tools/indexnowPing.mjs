// Ping IndexNow (Bing + partner engines) with every URL in the live sitemap.
// Run after a deploy that adds or changes marketing pages: pnpm run indexnow
const KEY = 'fd197affe639eed4ef2867d42ebe76d7';
const HOST = 'kotobaapp.com';

const sitemap = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
if (urlList.length === 0) throw new Error('no <loc> entries found in live sitemap');

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs — HTTP ${res.status} ${res.statusText}`);
urlList.forEach((u) => console.log(`  ${u}`));
if (!res.ok && res.status !== 202) process.exit(1);
