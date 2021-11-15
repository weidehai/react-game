import BasicTank from 'src/components/tanks/BasicTank';
import { BrickLayer } from './components/layer/BrickLayer';
// import map from './stageConfig/stage1';

export default function PlayStage1(): JSX.Element {
  // map.forEach()
  setTimeout(() => {
    const mask: HTMLDivElement = document.querySelector(
      '.mask'
    ) as HTMLDivElement;
    mask.style.display = 'none';
  }, 1000);
  return (
    <g transform="scale(3)">
      <BrickLayer
        top={17}
        left={17}
        bottom={89}
        right={33}
        transform="translate(16,17)"
      />
      <BrickLayer
        top={17}
        left={17}
        bottom={89}
        right={33}
        transform="translate(48,17)"
      />
      <BrickLayer
        top={17}
        left={17}
        bottom={89}
        right={33}
        transform="translate(80,17)"
      />
      <BrickLayer
        top={17}
        left={17}
        bottom={89}
        right={33}
        transform="translate(112,17)"
      />
      <BrickLayer
        top={17}
        left={17}
        bottom={89}
        right={33}
        transform="translate(144,17)"
      />
      <BrickLayer
        top={17}
        left={17}
        bottom={89}
        right={33}
        transform="translate(176,17)"
      />
      <BasicTank
        args={{
          direction: 'top',
          x: 0,
          y: 17,
          scale: 1.12,
        }}
      />
    </g>
  );
}
