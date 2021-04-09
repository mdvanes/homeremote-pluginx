import { ToggleButton } from '@homeremote-pluginx/ui';
import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DomoticzControlsProps {}

const StyledDomoticzControls = styled.div`
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  font-family: sans-serif;
  padding: 0.5rem;
  margin: 0.3rem;
`;

export function DomoticzControls(props: DomoticzControlsProps) {
  return (
    <StyledDomoticzControls>
      <h2>Domoticz devices</h2>
      <ToggleButton label="living room lamp" />
      <ToggleButton label="kitchen lamp" />
    </StyledDomoticzControls>
  );
}

export default DomoticzControls;
