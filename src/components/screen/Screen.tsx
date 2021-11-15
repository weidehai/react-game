import * as React from 'react';
import TextBrickWallPattern from 'src/components/text/TextBrickPattern';
import { Provider } from 'src/context';

const SCREEN_WIDTH = BLOCK_SIZE * 13;
const SCREEN_HEIGHT = BLOCK_SIZE * 13;
const ZOOM_LEVEL = 3;
const DESIGN_SIZE = 69.33;
const SENCE_SIZE = SCREEN_HEIGHT * ZOOM_LEVEL;
const SCALE = SENCE_SIZE / DESIGN_SIZE;

interface ScreenProps {
  background?: string;
  children?: React.ReactNode;
}

export default function Screen({
  children,
  background = '#000000',
}: ScreenProps): JSX.Element {
  return (
    <Provider value={{ scale: SCALE }}>
      <svg
        className="screen"
        style={{ background }}
        width={SCREEN_WIDTH * ZOOM_LEVEL}
        height={SCREEN_HEIGHT * ZOOM_LEVEL}
        viewBox={`0 0 ${SCREEN_WIDTH * ZOOM_LEVEL} ${
          SCREEN_HEIGHT * ZOOM_LEVEL
        }`}
      >
        <TextBrickWallPattern />
        {children}
      </svg>
    </Provider>
  );
}
