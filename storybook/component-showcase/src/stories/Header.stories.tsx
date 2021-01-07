import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Header from '../../../../src/blocks/header';
import { HeaderBlock } from '../../../../src/blocks/contentBlocks';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderBlock> = (args) => <Header {...args} />;

export const HeaderNoMarkup = Template.bind({});
HeaderNoMarkup.args = {
  data: {
    level: 1,
    text: "This is a level 1 header with no markup"
  }
};

export const HeaderWithMarkup = Template.bind({});
HeaderWithMarkup.args = {
  data: {
    level: 2,
    text: "This <i>is</i> a level 2 <i>header</i> with markup"
  }
};


