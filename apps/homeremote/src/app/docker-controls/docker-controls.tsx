import { ToggleButton } from '@homeremote-pluginx/ui';
import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DockerControlsProps {}

const StyledDockerControls = styled.div`
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  font-family: sans-serif;
  padding: 0.5rem;
  margin: 0.3rem;
`;

export function DockerControls(props: DockerControlsProps) {
  return (
    <StyledDockerControls>
      <h2>Docker containers</h2>
      <ToggleButton label="container 1" />
      <ToggleButton label="container 2" />
    </StyledDockerControls>
  );
}

export default DockerControls;
