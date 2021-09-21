export function svg2img(svgStr: string): string {
  const svgB = new Blob([svgStr], { type: 'image/svg+xml' });
  return URL.createObjectURL(svgB);
}

export enum key {
  ArrowDown = 'ArrowDown',
  ArrowUp = 'ArrowUp',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  Enter = 'Enter',
}
