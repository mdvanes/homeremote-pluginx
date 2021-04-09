import React from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {}

const StyledButton = styled.button`
  color: green;
`;

export function Button(props: ButtonProps) {
  return (
    <StyledButton onClick={() => alert("Not yet implemented!")}>
      Click!
    </StyledButton>
  );
}

export default Button;
