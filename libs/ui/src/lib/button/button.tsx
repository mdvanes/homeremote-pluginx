import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  label: string;
}

const StyledButton = styled.button`
  background-color: #1976d2;
  border: none;
  border-radius: 0.2rem;
  color: white;
  padding: 0.4rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  font-size: 0.875rem;
`;

export function Button({ label }: ButtonProps) {
  return (
    <StyledButton onClick={() => alert('Not yet implemented!')}>
      {label}
    </StyledButton>
  );
}

export default Button;
