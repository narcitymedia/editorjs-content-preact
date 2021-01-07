import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import RawHTML from '../../../../src/blocks/rawHTML';
import { RawHTMLBlock } from '../../../../src/blocks/contentBlocks';

export default {
  title: 'Components/RawHTML',
  component: RawHTML,
} as Meta;

const Template: Story<RawHTMLBlock> = (args) => <RawHTML {...args} />;

export const RawHTMLSample = Template.bind({});
RawHTMLSample.args = {
  data: {
    html: "<body><p>Lorem ipsum dolor sit amet, <i>consectetur</i> adipiscing elit. In risus augue, dignissim vel scelerisque id<p></body>"
  }
};