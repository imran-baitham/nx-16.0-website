import { render } from '@testing-library/react';

import SharedGreeter from './shared-greeter';
import React from 'react';

const defaultProps = {
  name: 'imran',
};

describe('SharedGreeter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedGreeter {...defaultProps} />);
    expect(baseElement).toBeTruthy();
  });
});
