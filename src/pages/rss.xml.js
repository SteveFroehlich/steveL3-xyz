import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL, AUTHOR_NAME } from '../consts';
import { getPublishedWriting } from '../lib/writing';

export async function GET(context) {
  const writing = await getPublishedWriting();

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site ?? SITE_URL,
    items: writing.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.publishedAt,
      link: `/writing/${entry.id}/`,
      author: AUTHOR_NAME,
    })),
    customData: `<language>en-us</language>`,
  });
}
