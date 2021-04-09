import React from 'react';
import { render } from '@testing-library/react';

import DomoticzControls from './domoticz-controls';

describe('DomoticzControls', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DomoticzControls />);
    expect(baseElement).toBeTruthy();
  });
});
