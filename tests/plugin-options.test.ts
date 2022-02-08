import { testPluginOptionsSchema } from 'gatsby-plugin-utils';
import { pluginOptionsSchema } from '../src/gatsby-node';

describe('Plugin options', () => {
  test('Should invalidate incorrect options', async () => {
    const options = {
      random: 'stuff',
      noMarkup: 'lorem ipsum',
    };

    const { isValid, errors } = await testPluginOptionsSchema(
      pluginOptionsSchema,
      options,
    );

    expect(isValid).toBe(false);
    expect(errors).toEqual([
      '"noMarkup" must be a boolean',
    ]);
  });

  test('Should validate correct options', async () => {
    const options = {
      noMarkup: true,
    };

    const { isValid, errors } = await testPluginOptionsSchema(
      pluginOptionsSchema,
      options,
    );

    expect(isValid).toBe(true);
    expect(errors.length).toBe(0);
  });
});
