enum color {
  adret = '#e7e794',
  night = '#e79c21',
  shadow = '#6b6b00',
}
const dir = {
  top: 0,
  bottom: 180,
  left: 270,
  right: 90,
};

interface basicTankProps {
  args: {
    x?: number;
    y?: number;
    direction?: 'top' | 'bottom' | 'left' | 'right';
  };
}

export default function BasicTank({ args }: basicTankProps): JSX.Element {
  const { x = 0, y = 0, direction = 'top' } = args;

  return (
    <g transform={`translate(${x},${y}) rotate(${dir[direction]})`}>
      <g className="left-tire">
        <rect x={0} y={2} height={1} width={1} fill={color.adret} />
        <rect x={1} y={2} height={1} width={2} fill={color.night} />
        <rect x={0} y={3} height={1} width={2} fill={color.shadow} />

        <rect x={0} y={4} height={1} width={1} fill={color.adret} />
        <rect x={1} y={4} height={1} width={1} fill={color.night} />
        <rect x={0} y={5} height={1} width={2} fill={color.shadow} />

        <rect x={0} y={6} height={1} width={1} fill={color.adret} />
        <rect x={1} y={6} height={1} width={1} fill={color.night} />
        <rect x={0} y={7} height={1} width={2} fill={color.shadow} />

        <rect x={0} y={8} height={1} width={1} fill={color.adret} />
        <rect x={1} y={8} height={1} width={1} fill={color.night} />
        <rect x={0} y={9} height={1} width={2} fill={color.shadow} />

        <rect x={0} y={10} height={1} width={1} fill={color.adret} />
        <rect x={1} y={10} height={1} width={1} fill={color.night} />
        <rect x={0} y={11} height={1} width={2} fill={color.shadow} />

        <rect x={0} y={12} height={1} width={1} fill={color.adret} />
        <rect x={1} y={12} height={1} width={2} fill={color.night} />
      </g>

      <g className="tank-body">
        <rect x={2} y={3} height={9} width={1} fill={color.adret} />
        <rect x={3} y={5} height={5} width={1} fill={color.adret} />
        <rect x={4} y={6} height={3} width={1} fill={color.night} />
        <rect x={5} y={6} height={3} width={1} fill={color.adret} />
        <rect x={5} y={9} height={1} width={1} fill={color.night} />
        <rect x={6} y={9} height={1} width={2} fill={color.shadow} />
        <rect x={6} y={6} height={1} width={1} fill={color.adret} />
        <rect x={6} y={7} height={2} width={1} fill={color.night} />
        <rect x={7} y={6} height={3} width={1} fill={color.shadow} />

        <rect x={4} y={4} height={2} width={1} fill={color.adret} />
        <rect x={5} y={4} height={2} width={1} fill={color.night} />

        <rect x={6} y={0} height={5} width={1} fill={color.adret} />

        <rect x={7} y={4} height={1} width={2} fill={color.shadow} />
        <rect x={6} y={5} height={1} width={3} fill={color.night} />
        <rect x={9} y={5} height={1} width={1} fill={color.shadow} />
        <rect x={8} y={6} height={4} width={1} fill={color.night} />

        <rect x={4} y={9} height={2} width={1} fill={color.adret} />
        <rect x={5} y={10} height={1} width={1} fill={color.adret} />
        <rect x={6} y={10} height={1} width={3} fill={color.night} />
        <rect x={9} y={10} height={1} width={1} fill={color.shadow} />
        <rect x={9} y={6} height={4} width={1} fill={color.night} />
        <rect x={3} y={10} height={1} width={1} fill={color.shadow} />
        <rect x={4} y={11} height={1} width={5} fill={color.shadow} />
      </g>

      <g className="right-tire">
        <rect x={10} y={2} height={1} width={1} fill={color.adret} />
        <rect x={11} y={2} height={1} width={2} fill={color.night} />

        <rect x={11} y={3} height={1} width={2} fill={color.shadow} />
        <rect x={11} y={4} height={1} width={2} fill={color.night} />
        <rect x={11} y={5} height={1} width={2} fill={color.shadow} />
        <rect x={11} y={6} height={1} width={2} fill={color.night} />
        <rect x={11} y={7} height={1} width={2} fill={color.shadow} />
        <rect x={11} y={8} height={1} width={2} fill={color.night} />
        <rect x={11} y={9} height={1} width={2} fill={color.shadow} />
        <rect x={11} y={10} height={1} width={2} fill={color.night} />
        <rect x={11} y={11} height={1} width={2} fill={color.shadow} />
        <rect x={11} y={12} height={1} width={2} fill={color.night} />

        <rect x={10} y={3} height={10} width={1} fill={color.shadow} />
      </g>
    </g>
  );
}
