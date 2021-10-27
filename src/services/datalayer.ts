import { GatsbyDictionaryEntry } from './dictionary';

interface DictionaryEntryNode extends GatsbyDictionaryEntry {
  id: string,
  parent: string | null,
  children: string[],
  internal: {
    type: string,
    contentDigest: string,
  }

}

export function parseGatsbyNodes(
  dictionary: GatsbyDictionaryEntry[],
  createNodeId,
  createContentDigest,
): DictionaryEntryNode[] {
  const nodes: DictionaryEntryNode[] = [];

  dictionary.forEach((dictionaryEntry) => {
    const node: DictionaryEntryNode = {
      id: createNodeId(dictionaryEntry.slug),
      parent: null,
      children: [],
      internal: {
        type: 'DictionaryEntry',
        contentDigest: createContentDigest(dictionaryEntry),
      },
      ...dictionaryEntry,
    };

    nodes.push(node);
  });

  return nodes;
}

export default {
  parseGatsbyNodes,
};
