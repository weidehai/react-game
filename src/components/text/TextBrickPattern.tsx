import BrickWall1 from 'src/components/wall/brickWall/BrickWall1';
import BrickWall2 from 'src/components/wall/brickWall/BrickWall2';

export default function BrickWallPattern(): JSX.Element {
  return (
    <defs>
      <pattern
        id="pattern-brickwall"
        width="2"
        height="2"
        patternUnits="userSpaceOnUse"
      >
        <g transform="scale(0.25)">
          <BrickWall1 />
          <BrickWall2 transform="translate(4,0)" />
          <BrickWall1 transform="translate(4,4)" />
          <BrickWall2 transform="translate(0,4)" />
        </g>
      </pattern>
    </defs>
  );
}
