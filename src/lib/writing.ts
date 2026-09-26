import { getCollection, type CollectionEntry } from 'astro:content';
import getReadingTime from 'reading-time';

export type WritingEntry = CollectionEntry<'writing'>;

export async function getPublishedWriting(): Promise<WritingEntry[]> {
  const entries = await getCollection('writing', ({ data }) => data.draft !== true);
  return entries.sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
  );
}

export async function getFeaturedWriting(limit = 3): Promise<WritingEntry[]> {
  const published = await getPublishedWriting();
  const featured = published.filter((entry) => entry.data.featured);
  const source = featured.length > 0 ? featured : published;
  return source.slice(0, limit);
}

export function getReadingMinutes(body: string | undefined): string {
  const minutes = Math.max(1, Math.round(getReadingTime(body ?? '').minutes));
  return `${minutes} min`;
}

export function formatDate(date: Date): string {
  return date
    .toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC',
    })
    .toUpperCase();
}

export function slugifyTag(tag: string): string {
  return tag.trim().toLowerCase().replace(/\s+/g, '-');
}

export async function getAllTags(): Promise<Map<string, WritingEntry[]>> {
  const published = await getPublishedWriting();
  const tags = new Map<string, WritingEntry[]>();

  for (const entry of published) {
    for (const tag of entry.data.tags) {
      const key = slugifyTag(tag);
      const existing = tags.get(key) ?? [];
      existing.push(entry);
      tags.set(key, existing);
    }
  }

  return tags;
}
