import { getEntries } from '../../src/services/dictionary';
import { parseGatsbyNodes } from '../../src/services/datalayer';

const createNodeId = jest.fn((slug) => `unique-${slug}`);
const createContentDigest = jest.fn((entry) => `content-digest-for-${entry.slug}`);

describe('Datalayer tests', () => {
  const entries = getEntries();

  test('Datalayer parsing produces correct amount of new nodes (35207)', () => {
    const result = parseGatsbyNodes(entries, createNodeId, createContentDigest);
    expect(result.length).toBe(35207);
  });

  test('Datalayer parsing appends unique IDs.', () => {
    const result = parseGatsbyNodes(entries, createNodeId, createContentDigest);

    // In mock we expect "unique" ids to just have "unique-" prefix.
    result.forEach(({ id, slug }) => {
      expect(id).toBe(`unique-${slug}`);
    });
  });

  test('Datalayer parsing appends content digests.', () => {
    const result = parseGatsbyNodes(entries, createNodeId, createContentDigest);

    // In mock content digest is just simple string.
    result.forEach(({ internal, slug }) => {
      expect(internal.contentDigest).toBe(`content-digest-for-${slug}`);
    });
  });

  test('Datalayer should not add parents or children to dictionary entries.', () => {
    const result = parseGatsbyNodes(entries, createNodeId, createContentDigest);

    result.forEach(({ parent, children }) => {
      expect(parent).toBeNull();
      expect(children.length).toBe(0);
    });
  });
});
