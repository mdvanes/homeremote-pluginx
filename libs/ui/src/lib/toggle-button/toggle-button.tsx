import { Button } from '@homeremote-pluginx/ui';
import React, { useState } from 'react';

import styled from 'styled-components';

export interface ToggleButtonProps {
  label: string;
}

const StyledDiv = styled.div`
  display: flex;
`;

export function ToggleButton({ label }: ToggleButtonProps) {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <StyledDiv>
        <Button
          label={label}
          onClick={() => {
            setIsOn(!isOn);
          }}
        />
        <div style={{ marginLeft: "0.5rem", fontFamily: "sans-serif"}}>{isOn ? "🚀" : "💤"}</div>
      </StyledDiv>
    </div>
  );
}

export default ToggleButton;
