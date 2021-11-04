import BrickWall1 from 'src/components/wall/brickWall/BrickWall1';
import BrickWall2 from 'src/components/wall/brickWall/BrickWall2';

export function BrickLayer(): JSX.Element {
  return (
    <g className="brick-layer">
      <BrickWall2 />
      <BrickWall1 transform="translate(4,0)" />
      <BrickWall2 transform="translate(8,0)" />
      <BrickWall1 transform="translate(12,0)" />
    </g>
  );
}
