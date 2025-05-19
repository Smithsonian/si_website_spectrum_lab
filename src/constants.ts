export const CHART_WIDTH = 610;
export const RAINBOW_HEIGHT = 60;
export const LEFT_AXIS_WIDTH = 28;
export const MIN_WAVELENGTH = 0.2;
export const NUM_OF_DRAWING_BUCKETS = 100;
export const X_BUCKET_WIDTH = CHART_WIDTH / NUM_OF_DRAWING_BUCKETS;
export const Y_0_FROM_BOTTOM = 10.5;
export const Y_TICK_DISTANCE = 13;
export const Y_1_FROM_TOP = 9.5;
export const Y_RANGE = Y_TICK_DISTANCE * 10;
export const CHART_HEIGHT = Y_0_FROM_BOTTOM + Y_RANGE + Y_1_FROM_TOP;
const rawBaseUrl = import.meta.env.BASE_URL;
const slashAtTheEnd = /\/$/;
// Don't duplicate an ending slash, but make sure one's there
export const BASE_URL = slashAtTheEnd.test(rawBaseUrl)
  ? rawBaseUrl
  : `${rawBaseUrl}/`;

export type InstructionRowType =
  | 'Intro'
  | 'Tutorial'
  | 'Notebook'
  | 'Tool'
  | 'Video'
  | 'Investigate'
  | 'Art'
  | 'Simulation'
  | 'Slideshow';
export type PlotType = 'line' | 'scatter';
