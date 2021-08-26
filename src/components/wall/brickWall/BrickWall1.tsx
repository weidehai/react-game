import { svg2img } from 'src/utils/index';

const brickWall1 =
  '<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4">\n\n  <rect width="4" height="4" fill="#636363"/>\n  <rect x="1" y="0" width="3" height="3" fill="#6B0800"/>\n  <rect x="2" y="1" width="2" height="2" fill="#9C4A00"/>\n</svg>';
export default function BrickWall1({ transform }: brickWall): JSX.Element {
  return <image transform={transform} href={svg2img(brickWall1)} />;
}
