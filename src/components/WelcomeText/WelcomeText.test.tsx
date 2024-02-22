import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { WelcomeText } from './WelcomeText';

describe(WelcomeText, () => {
  it('renders the welcome text correctly', () => {
    const text = 'Welcome to the website!';
    const { getByText } = render(<WelcomeText text={text} />);
    const welcomeTextElement = getByText(text);
    expect(welcomeTextElement).toBeInTheDocument();
  });
});
