import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import List from '../../../../src/blocks/list';
import { ListStyle, ListBlock } from '../../../../src/blocks/contentBlocks';

export default {
  title: 'Components/List',
  component: List,
} as Meta;

const Template: Story<ListBlock> = (args) => <List {...args} />;

export const UnorderedListNoMarkup = Template.bind({});
UnorderedListNoMarkup.args = {
  data: {
    style: ListStyle.Unordered,
    items: ["hello", "world"]
  }
};

export const UnorderedListWithMarkup = Template.bind({});
UnorderedListWithMarkup.args = {
  data: {
    style: ListStyle.Unordered,
    items: ["Say <i>hello</i> to your <b>neighbors</b>", "<b>world</b>", "<a href='https://www.google.ca'>GOOGLE LINK</a>"]
  }
};

export const OrderedListNoMarkup = Template.bind({});
OrderedListNoMarkup.args = {
  data: {
    style: ListStyle.Ordered,
    items: ["Eggs", "Chicken", "Beer"]
  }
};


export const OrderedListWithMarkup = Template.bind({});
OrderedListWithMarkup.args = {
  data: {
    style: ListStyle.Unordered,
    items: ["A <i>dozen</i> Eggs", "<b>Chicken</b> breast", "OV Beer", "<a href='https://www.google.ca'>GOOGLE LINK</a>"]
  }
};



