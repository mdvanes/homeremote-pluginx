import React from 'react';
import { render } from '@testing-library/react';

import StreamPlayer from './stream-player';

describe('StreamPlayer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StreamPlayer />);
    expect(baseElement).toBeTruthy();
  });
});
