const BLACK8 = Uint8Array.from([0])[0];
const BRICK4 = Uint8Array.from([240])[0];
/* eslint-disable */
const map = [
  BLACK8, BLACK8, BLACK8, BLACK8, BLACK8, BLACK8, BLACK8,
  BLACK8 & BRICK4,
];

export default map;
