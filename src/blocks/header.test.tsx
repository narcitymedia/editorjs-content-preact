import React from 'react';
import * as renderer from 'react-test-renderer';
import { BlockType } from '..';

import Header from './header';

describe('Header', () => {
  it('should render the 0 level heading as h1', () => {
    const args = {
      text: "Heading 1",
      level: 0,
    }
    const tree = renderer
      .create(<Header type={BlockType.Delimiter} data={args} contentUniqueId="XXX-XXX" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render the 1 level heading as h1', () => {
    const args = {
      text: "Heading 1",
      level: 1,
    }
    const tree = renderer
      .create(<Header type={BlockType.Delimiter} data={args} contentUniqueId="XXX-XXX" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render the 2 level heading as h2', () => {
    const args = {
      text: "Heading 2",
      level: 2,
    }
    const tree = renderer
      .create(<Header type={BlockType.Delimiter} data={args} contentUniqueId="XXX-XXX" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
