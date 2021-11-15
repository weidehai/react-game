import BrickWall1 from 'src/components/wall/brickWall/BrickWall1';
import BrickWall2 from 'src/components/wall/brickWall/BrickWall2';

export function BrickLayer(position: {
  top: number;
  left: number;
  bottom: number;
  right: number;
  transform: string;
}): JSX.Element {
  const { left, bottom, right, transform } = position;
  let { top } = position;
  let $left = left;
  const elements: Array<Array<JSX.Element>> = [];
  function generator(): Array<JSX.Element> {
    while (top < bottom) {
      const rowElements = [];
      let style = elements.length % 2 === 0 ? 2 : 1;
      while ($left < right) {
        switch (style) {
          case 1:
            rowElements.push(
              <BrickWall1
                transform={`translate(${rowElements.length * 4},${
                  elements.length * 4
                })`}
              />
            );
            style = 2;
            break;
          case 2:
            rowElements.push(
              <BrickWall2
                transform={`translate(${rowElements.length * 4},${
                  elements.length * 4
                })`}
              />
            );
            style = 1;
            break;
          default:
            rowElements.push(
              <BrickWall1
                transform={`translate(${rowElements.length * 4},${
                  elements.length * 4
                })`}
              />
            );
        }
        $left += 4;
      }
      elements.push(rowElements);
      top += 4;
      $left = left;
    }
    return elements.flat();
  }
  return (
    <g className="brick-layer" transform={transform}>
      {generator()}
    </g>
  );
}
