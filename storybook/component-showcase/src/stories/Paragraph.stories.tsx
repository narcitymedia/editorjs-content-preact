import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Paragraph from '../../../../src/blocks/paragraph';
import { ParagraphBlock } from '../../../../src/blocks/contentBlocks';

export default {
  title: 'Components/Paragraph',
  component: Paragraph,
} as Meta;

const Template: Story<ParagraphBlock> = (args) => <Paragraph {...args} />;

export const PargraphNoMarkup = Template.bind({});
PargraphNoMarkup.args = {
  data: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In risus augue, dignissim vel scelerisque id "
  }
};

export const PargraphWithMarkup = Template.bind({});
PargraphWithMarkup.args = {
  data: {
    text: "Lorem ipsum <i>dolor</i> sit amet, consectetur <b>adipiscing elit</b>. In risus augue, dignissim vel scelerisque id"
  }
};


