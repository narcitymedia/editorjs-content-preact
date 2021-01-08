import React from 'react';
import * as renderer from 'react-test-renderer';
import { BlockType } from '..';

import Delimiter from './delimiter';

describe('Delimeter', () => {
  it('should render the delimeter', () => {
    const tree = renderer
      .create(<Delimiter type={BlockType.Delimiter} data={null} contentUniqueId="XXX-XXX" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
