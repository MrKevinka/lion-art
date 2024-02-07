import { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

export default {
  title: 'Components/Atoms/Heading',
  component: Heading,
  args: {
    text: 'Hello, World!',
  },
} satisfies Meta<typeof Heading>;

export const Default: StoryObj<typeof Heading> = {};
