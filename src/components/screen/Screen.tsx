import * as React from 'react';

const SCREEN_WIDTH = BLOCK_SIZE * 50;
const SCREEN_HEIGHT = BLOCK_SIZE * 37.5;
const ZOOM_LEVEL = 1;

interface ScreenProps {
  background?: string;
  children?: React.ReactNode;
}

export default function Screen({
  children,
  background = '#000000',
}: ScreenProps): JSX.Element {
  return (
    <svg
      className="screen"
      style={{ background }}
      width={SCREEN_WIDTH * ZOOM_LEVEL}
      height={SCREEN_HEIGHT * ZOOM_LEVEL}
      viewBox={`0 0 ${SCREEN_WIDTH} ${SCREEN_HEIGHT}`}
    >
      {children}
    </svg>
  );
}