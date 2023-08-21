const { createWriteStream } = require('fs');
const { SitemapStream } = require('sitemap');
const { organizations, nonProfitOrganizations } = require('./data/db.json');

// Creates a sitemap object given the input configuration with URLs
const sitemap = new SitemapStream({ hostname: 'https://abhinav2127.github.io' });

const writeStream = createWriteStream('./build/sitemap.xml');
sitemap.pipe(writeStream);

// Static URIs
sitemap.write({ url: '/hire-me' });
sitemap.write({ url: '/' });
// sitemap.write({ url: '/skills' });
// sitemap.write({ url: '/experience' });
// sitemap.write({ url: '/repositories' });

// Create site map for organization URL's
// organizations.map((val, idx) => {
//     sitemap.write({ url: `/organizations/${encodeURI(val.name)}`, lastmod: new Date().toISOString() });
// })
// nonProfitOrganizations.map((val, idx) => {
//     sitemap.write({ url: `/non_profit/${encodeURI(val.name)}`, lastmod: new Date().toISOString() });
// })

sitemap.end();