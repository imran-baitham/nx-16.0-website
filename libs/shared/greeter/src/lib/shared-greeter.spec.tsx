import { render } from '@testing-library/react';

import SharedGreeter from './shared-greeter';
import React from 'react';

describe('SharedGreeter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedGreeter />);
    expect(baseElement).toBeTruthy();
  });
});
