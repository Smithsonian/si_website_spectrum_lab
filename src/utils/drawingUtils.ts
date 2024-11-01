import {
  CHART_HEIGHT,
  NUM_OF_DRAWING_BUCKETS,
  X_BUCKET_WIDTH,
  Y_0_FROM_BOTTOM,
  Y_1_FROM_TOP,
} from '@/constants';

export const bucketFromXLoc = (xLoc: number): number => {
  const bucket = Math.floor(xLoc / X_BUCKET_WIDTH);
  // Some events can end up off the left edge
  if (bucket < 0) {
    return 0;
  }
  // Or exactly on, or off the right edge
  const maxBucket = NUM_OF_DRAWING_BUCKETS - 1;
  if (bucket > maxBucket) {
    return maxBucket;
  }
  return bucket;
};

export const yInRangeFromY = (yLoc: number): number => {
  // y increases going down, in document order.
  // Intensity increases going up, like most charts.
  // So the range check math looks a little weird.
  if (yLoc < Y_1_FROM_TOP) {
    return Y_1_FROM_TOP;
  }
  const y0Loc = CHART_HEIGHT - Y_0_FROM_BOTTOM;
  if (yLoc > y0Loc) {
    return y0Loc;
  }
  return yLoc;
};
