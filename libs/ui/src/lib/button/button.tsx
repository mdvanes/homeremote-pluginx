import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  label: string;
}

const StyledButton = styled.button`
background-color: blue;
  border: none;
  text-transform: uppercase;
`;

export function Button({ label }: ButtonProps) {
  return (
    <StyledButton onClick={() => alert('Not yet implemented!')}>
      {label}
    </StyledButton>
  );
}

export default Button;
