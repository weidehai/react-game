declare global {
  interface Window {
    BLOCK_SIZE: number;
  }
}
window.BLOCK_SIZE = 16;

export {};
