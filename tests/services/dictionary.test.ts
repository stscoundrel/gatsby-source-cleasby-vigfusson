import { getEntries } from '../../src/services/dictionary';

describe('Dictionary tests', () => {
  const entries = getEntries();

  test('Dictionary contains correct amount of entries (35207)', () => {
    expect(entries.length).toBe(35207);
  });

  test('Dictionary has added startsWith properties to source', () => {
    entries.forEach((entry) => {
      expect(Object.keys(entry)).toContain('startsWith');
    });
  });

  test('Dictionary has added url slugs to source', () => {
    entries.forEach((entry) => {
      expect(Object.keys(entry)).toContain('slug');
    });
  });

  test('Dictionary slugs are unique', () => {
    const slugs = new Set();

    entries.forEach((entry) => {
      slugs.add(entry.slug);
    });

    expect(slugs.size).toEqual(entries.length);
  });
});
