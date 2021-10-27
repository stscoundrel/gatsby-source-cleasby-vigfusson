import { getEntries } from './services/dictionary';
import { parseGatsbyNodes } from './services/datalayer';

/**
 * Main Gatsby hook for creating nodes to datalayer.
 */
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  const dictionary = getEntries();
  const nodes = parseGatsbyNodes(dictionary, createNodeId, createContentDigest);

  nodes.forEach((node) => {
    createNode(node);
  });
};
