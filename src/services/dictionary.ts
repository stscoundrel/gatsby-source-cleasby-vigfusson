import { DictionaryEntry, getDictionary } from 'cleasby-vigfusson-dictionary';
import slugify from 'slugify';

interface GatsbyDictionaryEntry extends DictionaryEntry {
  slug: string;
  startsWith: string;
}

function addSlugs(entries: GatsbyDictionaryEntry[]) : GatsbyDictionaryEntry[] {
  const existingSlugs = {};

  const formattedEntries = entries.map((entry) => {
    let slug = slugify(entry.word).toLowerCase();

    if (slug.charAt(0) === '-') {
      slug = slug.substring(1);
    }

    if (existingSlugs[slug]) {
      // Double slug, make unique.
      existingSlugs[slug] += 1;
      slug = `${slug}-${existingSlugs[slug]}`;
    } else {
      existingSlugs[slug] = 1;
    }

    return {
      ...entry,
      slug,
    };
  });

  return formattedEntries;
}

export function getEntries() : GatsbyDictionaryEntry[] {
  const formattedEntries: GatsbyDictionaryEntry[] = [];
  const entries = getDictionary();

  entries.forEach((entry) => {
    formattedEntries.push({
      ...entry,
      slug: '',
      startsWith: entry.word.charAt(0).toUpperCase(),
    });
  });

  const entriesWithSlugs = addSlugs(formattedEntries);

  return entriesWithSlugs;
}

export default {
  getEntries,
};
