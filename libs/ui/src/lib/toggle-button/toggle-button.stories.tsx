import React from 'react';
import { ToggleButton } from './toggle-button';

export default {
  component: ToggleButton,
  title: 'UI/Molecules/ToggleButton',
};

export const primary = () => {
  return <ToggleButton label="Click" />;
};
