export const CHART_WIDTH = 700;
export const RAINBOW_HEIGHT = 45;
export const LEFT_AXIS_WIDTH = 26;
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
export const MODE = import.meta.env.MODE;

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

// This checks DEV because the URLs won't make any sense on dev,
// they only make sense on deployment
export const DATA_LABS_BASE = import.meta.env.DEV
  ? 'https://datalabs.cfa.harvard.edu'
  : `${import.meta.env.BASE_URL}/..`;

// Large files location. This does not use BASE_URL since these files are not
// version controlled, we just want to put them all in the same place. However,
// we still want them using their own host and not have datalabs vs datalabs8
// issues.
export const LARGE_FILES_BASE = import.meta.env.DEV
  ? 'https://datalabs.cfa.harvard.edu/large_files'
  : '/large_files';

export const CONSERVATION_TECHNIQUES_URL = `${LARGE_FILES_BASE}/Speclab/Museum%20Technique%20Descriptions.pdf`;
