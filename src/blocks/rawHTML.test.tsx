import React from 'react';
import * as renderer from 'react-test-renderer';

import RawHTML from './rawHTML';
import { RawHTMLBlock, BlockType } from './contentBlocks';

describe('RawHTML', () => {
  it('should render the RawHTML', () => {
    const args: RawHTMLBlock = {
      contentUniqueId: 'XXX-XXX',
      type: BlockType.RawHTML,
      data: {
        html: '<p>Hello World</p>',
      },
    };

    const tree = renderer.create(<RawHTML {...args} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
