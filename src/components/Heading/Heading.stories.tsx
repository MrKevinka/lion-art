import { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    text: 'Hello, World!',
  },
} satisfies Meta<typeof Heading>;

export const Default: StoryObj<typeof Heading> = {};
