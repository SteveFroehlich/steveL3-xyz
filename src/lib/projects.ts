import { getCollection, type CollectionEntry } from 'astro:content';

export type ProjectEntry = CollectionEntry<'projects'>;

export async function getPublishedProjects(): Promise<ProjectEntry[]> {
  const entries = await getCollection('projects', ({ data }) => data.draft !== true);
  return entries.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export async function getFeaturedProjects(limit = 4): Promise<ProjectEntry[]> {
  const published = await getPublishedProjects();
  const featured = published.filter((entry) => entry.data.featured);
  const source = featured.length > 0 ? featured : published;
  return source.slice(0, limit);
}

export function projectHref(entry: ProjectEntry): string {
  return entry.data.externalUrl ?? `/projects/${entry.id}`;
}

export function isExternalProject(entry: ProjectEntry): boolean {
  return Boolean(entry.data.externalUrl);
}
