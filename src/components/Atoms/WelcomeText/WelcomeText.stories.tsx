import { Meta, StoryObj } from '@storybook/react';

import { WelcomeText } from './WelcomeText';

export default {
  title: 'Components/Atoms/WelcomeText',
  component: WelcomeText,
  args: {
    text: 'This is the welcome text!',
  },
} satisfies Meta<typeof WelcomeText>;

export const Default: StoryObj<typeof WelcomeText> = {};
