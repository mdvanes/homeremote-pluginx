import React from 'react';
import { render } from '@testing-library/react';

import DockerControls from './docker-controls';

describe('DockerControls', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DockerControls />);
    expect(baseElement).toBeTruthy();
  });
});
