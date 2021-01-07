import React from 'react';

import { List } from '../../../../../src/blocks/list';

export default {
  title: 'Blocks/List',
  component: List,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <List {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  style: 'unordered',
  items: ['Hello', 'World'],
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
