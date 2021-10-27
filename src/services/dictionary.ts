import { DictionaryEntry, getDictionary } from 'cleasby-vigfusson-dictionary';

interface GatsbyDictionaryEntry extends DictionaryEntry {
  slug: string;
  startsWith: string;
}

export function getEntries() : GatsbyDictionaryEntry[] {
  const formattedEntries: GatsbyDictionaryEntry[] = [];
  const entries = getDictionary();

  entries.forEach((entry) => {
    formattedEntries.push({
      ...entry,
      slug: 'test',
      startsWith: entry.word.charAt(0),
    });
  });

  return formattedEntries;
}

export default {
  getEntries,
};