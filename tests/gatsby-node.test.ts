import { sourceNodes } from '../src/gatsby-node';

const createNodeId = jest.fn((slug) => `unique-${slug}`);
const createContentDigest = jest.fn((entry) => `content-digest-for-${entry.slug}`);
const createNodeMock = jest.fn();
const actions = {
  createNode: createNodeMock,
};

describe('Gatsby Node hook tests', () => {
  test('Hook calls createNode for all dictionary entries (35207 times)', () => {
    sourceNodes({ actions, createNodeId, createContentDigest });

    // Main create action.
    expect(createNodeMock.mock.calls.length).toBe(35207);

    // Related digest & ID methods that should receive same amount of calls.
    expect(createNodeId.mock.calls.length).toBe(35207);
    expect(createContentDigest.mock.calls.length).toBe(35207);
  });
});
