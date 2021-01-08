import React from 'react';
import * as renderer from 'react-test-renderer';

import List from './list';
import { ListStyle, ListBlock, BlockType } from './contentBlocks';

describe('List', () => {

  describe('unordered lists', () => {
    it('should render an unordered list with no markup', () => {
      const args: ListBlock = {
        data: {
          items: ["Butter", "Chicken", "Eggs"],
          style: ListStyle.Unordered
        },
        type: BlockType.List,
        contentUniqueId: "XXX-XXX",
      };
      const tree = renderer
        .create(<List {...args} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should render an unordered list with markup', () => {
      const args: ListBlock = {
        data: {
          items: ["<p>Butter<p>", "<i>Chicken</i>", "<a href='https://www.google.com'>Eggs</a>"],
          style: ListStyle.Unordered
        },
        type: BlockType.List,
        contentUniqueId: "XXX-XXX",
      };
      const tree = renderer
        .create(<List {...args} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('ordered lists', () => {
    it('should render an ordered list with no markup', () => {
      const args: ListBlock = {
        data: {
          items: ["Butter", "Chicken", "Eggs"],
          style: ListStyle.Ordered
        },
        type: BlockType.List,
        contentUniqueId: "XXX-XXX",
      };
      const tree = renderer
        .create(<List {...args} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should render an ordered list with markup', () => {
      const args: ListBlock = {
        data: {
          items: ["<p>Butter<p>", "<i>Chicken</i>", "<a href='https://www.google.com'>Eggs</a>"],
          style: ListStyle.Ordered
        },
        type: BlockType.List,
        contentUniqueId: "XXX-XXX",
      };
      const tree = renderer
        .create(<List {...args} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
