import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Delimeter from '../../../../src/blocks/delimiter';
import { DelimiterBlock } from '../../../../src/blocks/contentBlocks';

export default {
  title: 'Components/Delimeter',
  component: Delimeter,
} as Meta;

const Template: Story<DelimiterBlock> = (args) => <Delimeter {...args} />;

export const DelimeterSample = Template.bind({});
DelimeterSample.args = {
  data: {
  }
};