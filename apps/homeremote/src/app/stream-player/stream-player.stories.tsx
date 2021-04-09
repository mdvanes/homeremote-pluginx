import React from 'react';
import { StreamPlayer, StreamPlayerProps } from './stream-player';

export default {
  component: StreamPlayer,
  title: 'StreamPlayer',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: StreamPlayerProps = {};

  return <StreamPlayer />;
};
