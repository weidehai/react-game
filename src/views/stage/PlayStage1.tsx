import BasicTank from 'src/components/tanks/BasicTank';
import { BrickLayer } from './components/layer/BrickLayer';
// import map from './stageConfig/stage1';

export default function PlayStage1(): JSX.Element {
  // map.forEach()
  return (
    <g transform="scale(3) translate(17,17)">
      <BrickLayer />
      <BasicTank
        args={{
          direction: 'top',
          x: -16,
          y: 6,
          scale: 1.12,
        }}
      />
    </g>
  );
}
