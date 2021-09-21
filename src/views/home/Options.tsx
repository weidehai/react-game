import { Link } from 'react-router-dom';
import Text from 'src/components/text/Text';

export default function Options(): JSX.Element {
  return (
    <>
      <Link
        to="play-stage"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <g>
          <Text content="1 player" />
        </g>
      </Link>
    </>
  );
}
