const chars: Chars = {
  ' ': () => <g className="character-blank" />,
  '-': ({ fill }) => (
    <g className="character-dash" fill={fill}>
      <rect x={0} y={3.5} width={7} height={1} />
    </g>
  ),
  0: ({ fill }) => (
    <g className="character-0" fill={fill}>
      <rect x={2} y={0} width={3} height={1} />
      <rect x={1} y={1} width={1} height={1} />
      <rect x={4} y={1} width={2} height={1} />
      <rect x={0} y={2} width={2} height={3} />
      <rect x={5} y={2} width={2} height={3} />
      <rect x={1} y={5} width={2} height={1} />
      <rect x={5} y={5} width={1} height={1} />
      <rect x={2} y={6} width={3} height={1} />
    </g>
  ),
  1: ({ fill }) => (
    <g className="character-1" fill={fill}>
      <rect x={1} y={1} width={1} height={1} />
      <rect x={2} y={0} width={2} height={6} />
      <rect x={0} y={6} width={6} height={1} />
    </g>
  ),
  5: ({ fill }) => (
    <g className="character-5" fill={fill}>
      <rect x={0} y={0} width={6} height={1} />
      <rect x={0} y={1} width={1} height={1} />
      <rect x={0} y={2} width={6} height={1} />
      <rect x={5} y={3} width={2} height={3} />
      <rect x={0} y={5} width={1} height={1} />
      <rect x={1} y={6} width={5} height={1} />
    </g>
  ),
  8: ({ fill }) => (
    <g className="character-8" fill={fill}>
      <rect x={1} y={0} width={4} height={1} />
      <rect x={0} y={1} width={2} height={1} />
      <rect x={0} y={2} width={4} height={1} />
      <rect x={1} y={3} width={4} height={1} />
      <rect x={5} y={1} width={1} height={2} />
      <rect x={0} y={4} width={1} height={2} />
      <rect x={3} y={4} width={4} height={1} />
      <rect x={5} y={5} width={2} height={1} />
      <rect x={1} y={6} width={5} height={1} />
    </g>
  ),
  9: ({ fill }) => (
    <g className="character-9" fill={fill}>
      <rect x={1} y={0} width={5} height={1} />
      <rect x={0} y={1} width={2} height={2} />
      <rect x={5} y={1} width={2} height={4} />
      <rect x={1} y={3} width={5} height={1} />
      <rect x={4} y={5} width={2} height={1} />
      <rect x={1} y={6} width={4} height={1} />
    </g>
  ),
  a: ({ fill }) => (
    <g className="character-a" fill={fill}>
      <rect x={2} y={0} width={3} height={1} />
      <rect x={1} y={1} width={2} height={1} />
      <rect x={4} y={1} width={2} height={1} />
      <rect x={0} y={2} width={2} height={5} />
      <rect x={5} y={2} width={2} height={5} />
      <rect x={2} y={4} width={3} height={1} />
    </g>
  ),
  b: ({ fill }) => (
    <g className="character-b" fill={fill}>
      <rect x={0} y={0} width={2} height={7} />
      <rect x={2} y={0} width={4} height={1} />
      <rect x={5} y={1} width={2} height={2} />
      <rect x={2} y={3} width={4} height={1} />
      <rect x={5} y={4} width={2} height={2} />
      <rect x={2} y={6} width={4} height={1} />
    </g>
  ),
  c: ({ fill }) => (
    <g className="character-c" fill={fill}>
      <rect x={2} y={0} width={4} height={1} />
      <rect x={1} y={1} width={2} height={1} />
      <rect x={5} y={1} width={2} height={1} />
      <rect x={0} y={2} width={2} height={3} />
      <rect x={1} y={5} width={2} height={1} />
      <rect x={5} y={5} width={2} height={1} />
      <rect x={2} y={6} width={4} height={1} />
    </g>
  ),
  d: ({ fill }) => (
    <g className="character-d" fill={fill}>
      <rect x={0} y={0} width={2} height={7} />
      <rect x={2} y={0} width={3} height={1} />
      <rect x={4} y={1} width={2} height={1} />
      <rect x={5} y={2} width={2} height={3} />
      <rect x={4} y={5} width={2} height={1} />
      <rect x={2} y={6} width={3} height={1} />
    </g>
  ),
  e: ({ fill }) => (
    <g className="character-e" fill={fill}>
      <rect x={0} y={0} width={2} height={7} />
      <rect x={2} y={0} width={4} height={1} />
      <rect x={2} y={3} width={3} height={1} />
      <rect x={2} y={6} width={4} height={1} />
    </g>
  ),
  g: ({ fill }) => (
    <g className="character-g" fill={fill}>
      <rect x={2} y={0} width={5} height={1} />
      <rect x={1} y={1} width={2} height={1} />
      <rect x={0} y={2} width={2} height={3} />
      <rect x={1} y={5} width={2} height={1} />
      <rect x={2} y={6} width={5} height={1} />
      <rect x={5} y={4} width={2} height={2} />
      <rect x={4} y={3} width={3} height={1} />
    </g>
  ),
  h: ({ fill }) => (
    <g className="character-h" fill={fill}>
      <rect x={0} y={0} width={2} height={7} />
      <rect x={2} y={3} width={3} height={1} />
      <rect x={5} y={0} width={2} height={7} />
    </g>
  ),
  i: ({ fill }) => (
    <g className="character-i" fill={fill}>
      <rect x={0} y={0} width={6} height={1} />
      <rect x={2} y={1} width={2} height={5} />
      <rect x={0} y={6} width={6} height={1} />
    </g>
  ),
  l: ({ fill }) => (
    <g className="character-l" fill={fill}>
      <rect x={0} y={0} width={2} height={7} />
      <rect x={2} y={6} width={4} height={1} />
    </g>
  ),
  m: ({ fill }) => (
    <g className="character-m" fill={fill}>
      <rect x={0} y={0} width={2} height={7} />
      <rect x={2} y={1} width={1} height={3} />
      <rect x={3} y={2} width={1} height={3} />
      <rect x={4} y={1} width={1} height={3} />
      <rect x={5} y={0} width={2} height={7} />
    </g>
  ),
  n: ({ fill }) => (
    <g className="character-n" fill={fill}>
      <rect x={0} y={0} width={2} height={7} />
      <rect x={2} y={1} width={1} height={2} />
      <rect x={3} y={2} width={1} height={2} />
      <rect x={4} y={3} width={1} height={2} />
      <rect x={5} y={0} width={2} height={7} />
    </g>
  ),
  o: ({ fill }) => (
    <g className="character-o" fill={fill}>
      <rect x={1} y={0} width={5} height={1} />
      <rect x={0} y={1} width={2} height={5} />
      <rect x={5} y={1} width={2} height={5} />
      <rect x={1} y={6} width={5} height={1} />
    </g>
  ),
  p: ({ fill }) => (
    <g className="character-p" fill={fill}>
      <rect x={0} y={0} width={2} height={7} />
      <rect x={2} y={0} width={4} height={1} />
      <rect x={5} y={1} width={2} height={3} />
      <rect x={2} y={4} width={4} height={1} />
    </g>
  ),
  r: ({ fill }) => (
    <g className="character-r" fill={fill}>
      <rect x={0} y={0} width={2} height={7} />
      <rect x={2} y={0} width={3} height={1} />
      <rect x={4} y={1} width={2} height={3} />
      <rect x={2} y={4} width={3} height={1} />
      <rect x={3} y={5} width={3} height={1} />
      <rect x={4} y={6} width={3} height={1} />
    </g>
  ),
  s: ({ fill }) => (
    <g className="character-s" fill={fill}>
      <rect x={1} y={0} width={4} height={1} />
      <rect x={0} y={1} width={2} height={2} />
      <rect x={4} y={1} width={2} height={1} />
      <rect x={1} y={3} width={5} height={1} />
      <rect x={5} y={4} width={2} height={2} />
      <rect x={0} y={5} width={2} height={1} />
      <rect x={1} y={6} width={5} height={1} />
    </g>
  ),
  t: ({ fill }) => (
    <g className="character-t" fill={fill}>
      <rect x={0} y={0} width={6} height={1} />
      <rect x={2} y={1} width={2} height={6} />
    </g>
  ),
  v: ({ fill }) => (
    <g className="character-v" fill={fill}>
      <rect x={0} y={0} width={2} height={3} />
      <rect x={5} y={0} width={2} height={3} />
      <rect x={0} y={3} width={3} height={1} />
      <rect x={4} y={3} width={3} height={1} />
      <rect x={1} y={4} width={5} height={1} />
      <rect x={2} y={5} width={3} height={1} />
      <rect x={3} y={6} width={1} height={1} />
    </g>
  ),
  w: ({ fill }) => (
    <g className="character-w" fill={fill}>
      <rect x={0} y={0} width={2} height={7} />
      <rect x={2} y={3} width={1} height={3} />
      <rect x={3} y={2} width={1} height={3} />
      <rect x={4} y={3} width={1} height={3} />
      <rect x={5} y={0} width={2} height={7} />
    </g>
  ),
  y: ({ fill }) => (
    <g className="character-y" fill={fill}>
      <rect x={0} y={0} width={2} height={3} />
      <rect x={4} y={0} width={2} height={3} />
      <rect x={1} y={3} width={4} height={1} />
      <rect x={2} y={4} width={2} height={3} />
    </g>
  ),
  '©': ({ fill }) => {
    return (
      <g className="character-copyright-sign" fill={fill}>
        <rect x={2} y={0} width={3} height={1} />
        <rect x={1} y={1} width={1} height={1} />
        <rect x={5} y={1} width={1} height={1} />
        <rect x={0} y={2} width={1} height={3} />
        <rect x={6} y={2} width={1} height={3} />
        <rect x={1} y={5} width={1} height={1} />
        <rect x={5} y={5} width={1} height={1} />
        <rect x={2} y={6} width={3} height={1} />
        <rect x={3} y={2} width={2} height={1} />
        <rect x={2} y={3} width={1} height={1} />
        <rect x={3} y={4} width={2} height={1} />
      </g>
    );
  },
};

interface IProps {
  content: string;
  fill?: string;
}

export default function Text(props: IProps): JSX.Element {
  const { content, fill = 'white' } = props;
  return (
    <>
      {Array.from(content).map((char, index) => {
        const Component = chars[char];
        if (Component == null)
          throw new Error(`Character '${char}' Not Implemented.`);
        return (
          <g key={index} transform={`translate(${8 * index},0)`}>
            <Component fill={fill} />
          </g>
        );
      })}
    </>
  );
}
