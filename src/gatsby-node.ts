import { getEntries } from './services/dictionary';
import { parseGatsbyNodes } from './services/datalayer';

interface PluginOptions {
  noMarkup: boolean,
}

/**
 * Main Gatsby hook for creating nodes to datalayer.
 */
exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  pluginOptions: PluginOptions,
) => {
  const { createNode } = actions;

  const dictionary = getEntries(pluginOptions.noMarkup);
  const nodes = parseGatsbyNodes(dictionary, createNodeId, createContentDigest);

  nodes.forEach((node) => {
    createNode(node);
  });
};

/**
 * Plugin option validation.
 */
exports.pluginOptionsSchema = ({ Joi }) => Joi.object({
  noMarkup: Joi
    .boolean()
    .default(false)
    .description('Defines whether dictionary entries can contain HTML markup.'),
});
