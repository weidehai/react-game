import { useState, useEffect } from 'react';
import BasicTank from 'src/components/tanks/BasicTank';
import Text from 'src/components/text/Text';
import { key } from 'src/utils/index';
import { useHistory } from 'react-router-dom';
import { Consumer } from 'src/context';
import Title from './Title';
import Options from './Options';

const choices = ['single-player'];

export default function Home(): JSX.Element {
  const [choosed, setChoosed] = useState('single-player');
  const history = useHistory();
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
        case key.Enter:
          history.push('/play-stage');
          break;
        default:
          break;
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return function clearEventListener() {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [choosed, history]);
  return (
    <Consumer>
      {({ scale }) => (
        <g className="home">
          <g transform={`scale(${scale}) translate(11.7,15)`}>
            <Title />
          </g>
          <g transform={`scale(${scale / 3}) translate(73,99)`}>
            <Options />
          </g>
          <g transform={`scale(${scale / 4.5}) translate(105,148)`}>
            <BasicTank
              args={{
                direction: 'right',
                x: 0,
                y: choices.indexOf(choosed) * 18,
              }}
            />
          </g>
          <g
            className="copyright"
            transform={`scale(${scale / 3}) translate(21,150)`}
          >
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
      )}
    </Consumer>
  );
}
