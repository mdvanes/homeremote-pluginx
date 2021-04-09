import { Button } from '@homeremote-pluginx/ui';
import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DockerControlsProps {}

const StyledDockerControls = styled.div`
  color: pink;
`;

export function DockerControls(props: DockerControlsProps) {
  return (
    <StyledDockerControls>
      <h1>Docker containers</h1>
      <Button label="container 1" />
    </StyledDockerControls>
  );
}

export default DockerControls;
