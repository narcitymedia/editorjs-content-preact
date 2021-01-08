import React from 'react';
import * as renderer from 'react-test-renderer';

import Paragraph from './paragraph';
import { ParagraphBlock, BlockType } from './contentBlocks';

describe('Paragraph', () => {
  it('should render the Paragraph with no markup', () => {
    const args: ParagraphBlock = {
      contentUniqueId: 'XXX-XXX',
      type: BlockType.RawHTML,
      data: {
        text: 'No markup paragraph',
      },
    };

    const tree = renderer.create(<Paragraph {...args} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render the Paragraph with markup', () => {
    const args: ParagraphBlock = {
      contentUniqueId: 'XXX-XXX',
      type: BlockType.RawHTML,
      data: {
        text: "No <b>markup</b> paragraph <a href='https://www.google.ca'>Google Link</a>",
      },
    };

    const tree = renderer.create(<Paragraph {...args} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
