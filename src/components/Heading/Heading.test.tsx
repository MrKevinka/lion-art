import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Heading } from './Heading';

describe(Heading, () => {
  it('renders the heading text correctly', () => {
    const text = 'Hello, World!';
    const { getByText } = render(<Heading text={text} />);
    const headingElement = getByText(text);
    expect(headingElement).toBeInTheDocument();
  });
});
