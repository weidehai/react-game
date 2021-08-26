import Text from 'src/components/text/Text';

export default function Title(): JSX.Element {
  return (
    <>
      <g>
        <Text content="battle" fill="url(#pattern-brickwall)" />
      </g>
      <g transform="translate(8,8)">
        <Text content="city" fill="url(#pattern-brickwall)" />
      </g>
    </>
  );
}
