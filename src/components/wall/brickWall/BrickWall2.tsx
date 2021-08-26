import { svg2img } from 'src/utils/index';

const brickWall2 =
  '<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4">\n\n  <rect width="4" height="1" fill="#6B0800"/>\n  <rect x="0" y="1" width="4" height="2" fill="#9C4A00"/>\n  <rect x="0" y="3" width="4" height="1" fill="#636363"/>\n</svg>';

export default function BrickWall2({ transform }: brickWall): JSX.Element {
  return (
    <image
      transform={transform}
      href={svg2img(brickWall2)}
      width={4}
      height={4}
    />
  );
}
