import React from 'react';
import styled from 'styled-components';
import { Button } from '@homeremote-pluginx/ui';

/* eslint-disable-next-line */
export interface StreamPlayerProps {}

const StyledStreamPlayer = styled.div`
  color: pink;
`;

export function StreamPlayer(props: StreamPlayerProps) {
  return (
    <StyledStreamPlayer>
      <h1>Welcome to stream-player!</h1>
      <iframe src="https://start-player.npo.nl/embed/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VFbmNyeXB0aW9uIjoiZHJtIiwiZWxlbWVudElkIjoibnBvXzYwNzA0ZDBlODcyZTMiLCJhdXRvcGxheSI6IjAiLCJzaGFyZSI6IjAiLCJoYXNBZENvbnNlbnQiOiIwIiwic21hcnR0YWciOnsic2l0ZUlkIjoiMzMifSwiaWF0IjoxNjE3OTcyNDk0LCJuYmYiOjE2MTc5NzI0OTQsImV4cCI6MTYxODAwMTI5NCwiY29uc3VtZXJJZCI6IjQ1MGM5NjQ5LWMxNzktNGZmZi04NTM3LTBjNGMzYTcyYTljMyIsIm1lZGlhSWQiOiJMSV9SQURJTzJfMzAwODc5IiwiaXNQbGF5bGlzdCI6ZmFsc2UsInJlZmVycmVyVXJsIjpudWxsLCJza2lwQ2F0YWxvZyI6MCwibm9BZHMiOjAsInJlY29tbWVuZGF0aW9ucyI6MSwiaXNzIjoiZXlKcGRpSTZJbTV0WVdKVWVIa3hiMncyWEM4elpFZExVemhsVWtkM1BUMGlMQ0oyWVd4MVpTSTZJblJYZW5aRWJtMUJVbFVyWmxGb1dGUnVRVlpMZUVFcmNFeEVSRFZpYW05b1NFaEtZbTl2WldSeVZrdFdiMUZuZEhOMFdXRndaak5hTTFwTWEwdHNVVXNpTENKdFlXTWlPaUppTnpZNVpqazNORFJpT1Rka09EZzFNRGd5T0dWa1pUWXpabUUxWXpsa1pUUmtaVFk0WmpZMU1XVmhNREkzWXpCaFpqWTFZVEExTWpVMU1UUXpZVGMxSW4wPSJ9.rmK_b7AYR7-9HSM5xFxcbc4lgVoUvioEHwhBAwKiLus"></iframe>
      
      <Button />
    </StyledStreamPlayer>
  );
}

export default StreamPlayer;
