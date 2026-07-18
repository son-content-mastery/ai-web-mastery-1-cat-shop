import rss from '@astrojs/rss';
import { site } from '../config/site';
import { getArticles } from '../lib/catalog';
export async function GET() { const articles = await getArticles(); return rss({ title: 'MaoMao Cat Shop Blog', description: 'บทความอาหารแมวและการดูแลแมว', site: site.canonicalBase, items: articles.map(article => ({ title: article.title, description: article.excerpt, pubDate: article.publishedDate, link: `/blog/${article.slug}/` })) }); }
