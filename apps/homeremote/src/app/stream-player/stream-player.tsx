import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StreamPlayerProps {}

const StyledStreamPlayer = styled.div`
  color: pink;
`;

export function StreamPlayer(props: StreamPlayerProps) {
  return (
    <StyledStreamPlayer>
      <h1>Welcome to stream-player!</h1>
    </StyledStreamPlayer>
  );
}

export default StreamPlayer;
