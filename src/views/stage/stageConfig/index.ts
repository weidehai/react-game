import { MapConfig } from '../type';

const importConfigs = require.context('./', false, /\.json$/);
const mapConfigs: Array<MapConfig> = [];

importConfigs.keys().forEach((config) => {
  mapConfigs.push(importConfigs(config));
});

export default mapConfigs;
