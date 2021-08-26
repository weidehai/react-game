import { useState, useEffect } from 'react';
import BasicTank from 'src/components/tanks/BasicTank';
import BrickWallPattern from 'src/components/wall/brickWall/Pattern';
import Text from 'src/components/text/Text';
import { key } from 'src/utils/index';
import Title from './Title';
import Options from './Options';

const choices = ['single-player'];

export default function Home(): JSX.Element {
  const [choosed, setChoosed] = useState('single-player');
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case key.ArrowDown:
          setChoosed(choices[(choices.indexOf(choosed) + 1) % choices.length]);
          break;
        case key.ArrowUp:
          if (choices.indexOf(choosed) === 0) setChoosed(choices.slice(-1)[0]);
          else setChoosed(choices[choices.indexOf(choosed) - 1]);
          break;
        default:
          break;
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return function clearEventListener() {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [choosed]);
  return (
    <g className="home">
      <BrickWallPattern />
      <g transform="scale(8) translate(27,15)">
        <Title />
      </g>
      <g transform="scale(2) translate(168,140)">
        <Options />
      </g>
      <g transform="scale(2) translate(160,137)">
        <BasicTank
          args={{
            direction: 'right',
            x: 0,
            y: choices.indexOf(choosed) * 18,
          }}
        />
      </g>
      <g className="copyright" transform="scale(2) translate(117,230)">
        <g>
          <Text content="© 1980-1985 namco ltd" />
        </g>
        <g transform="translate(7,14)">
          <Text content="all rights reserved" />
        </g>
        <g transform="translate(28,28)">
          <Text content="retro by wone" />
        </g>
      </g>
    </g>
  );
}
