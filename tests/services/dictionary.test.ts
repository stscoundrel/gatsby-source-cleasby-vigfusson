import { getEntries } from '../../src/services/dictionary';

describe('Dictionary tests', () => {
  const entries = getEntries();
  const noMarkupEntries = getEntries(true);

  describe('Default with markup', () => {
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

    test('Dictionary slugs do not start with dashes', () => {
      entries.forEach((entry) => {
        expect(entry.slug.charAt(0)).not.toEqual('-');
      });
    });

    test('Dictionary contains expected content', () => {
      expect(entries[1].word).toBe('abbadís');
      expect(entries[1].slug).toBe('abbadis');
      expect(entries[1].definitions[0]).toBe('f. <i>abbess.</i> Hkr. iii. 398, Fms. vii. 239, Gþl. 365.');
      expect(entries[1].startsWith).toBe('A');
    });
  });

  describe('With noMarkup setting.', () => {
    test('Dictionary contains correct amount of entries (35207)', () => {
      expect(noMarkupEntries.length).toBe(35207);
    });

    test('Dictionary has added startsWith properties to source', () => {
      noMarkupEntries.forEach((entry) => {
        expect(Object.keys(entry)).toContain('startsWith');
      });
    });

    test('Dictionary has added url slugs to source', () => {
      noMarkupEntries.forEach((entry) => {
        expect(Object.keys(entry)).toContain('slug');
      });
    });

    test('Dictionary slugs are unique', () => {
      const slugs = new Set();

      noMarkupEntries.forEach((entry) => {
        slugs.add(entry.slug);
      });

      expect(slugs.size).toEqual(noMarkupEntries.length);
    });

    test('Dictionary slugs do not start with dashes', () => {
      noMarkupEntries.forEach((entry) => {
        expect(entry.slug.charAt(0)).not.toEqual('-');
      });
    });

    test('Dictionary contains expected content', () => {
      expect(noMarkupEntries[1].word).toBe('abbadís');
      expect(noMarkupEntries[1].slug).toBe('abbadis');
      expect(noMarkupEntries[1].definitions[0]).toBe('f. abbess. Hkr. iii. 398, Fms. vii. 239, Gþl. 365.');
      expect(noMarkupEntries[1].startsWith).toBe('A');
    });
  });
});
