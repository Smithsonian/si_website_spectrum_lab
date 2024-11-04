import {
  CHART_HEIGHT,
  NUM_OF_DRAWING_BUCKETS,
  X_BUCKET_WIDTH,
  Y_0_FROM_BOTTOM,
  Y_1_FROM_TOP,
  Y_RANGE,
} from '@/constants';
import {
  inject,
  onMounted,
  onUnmounted,
  provide,
  readonly,
  ref,
  type InjectionKey,
  type Ref,
} from 'vue';

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

export interface BucketXLocs {
  xLeftEdge: number;
  xCenter: number;
  xRightEdge: number;
}
export const xLocsFromBucket = (bucket: number): BucketXLocs => ({
  xLeftEdge: bucket * X_BUCKET_WIDTH,
  xCenter: (bucket + 0.5) * X_BUCKET_WIDTH,
  xRightEdge: (bucket + 1) * X_BUCKET_WIDTH,
});
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

// The intensity axis is inverted due to canvas coordinates increasing top to bottom.
// That's normal for document order but backwards for graphs.
export const intensityFromYLoc = (yLoc: number): number => {
  const yAboveBottom = CHART_HEIGHT - yLoc;
  const yAbove0 = yAboveBottom - Y_0_FROM_BOTTOM;
  const intensity = yAbove0 / Y_RANGE;
  return intensity;
};

interface BucketDatum {
  bucket: number;
  yInRange: number;
}
export const bucketDatumFromLocs = (
  xLoc: number,
  yLoc: number,
): BucketDatum => {
  const bucket = bucketFromXLoc(xLoc);
  const yInRange = yInRangeFromY(yLoc);
  return { bucket, yInRange };
};

// Drawn spectrum data, indexed in a sparse array from 0 to 99, with Y value
// Because we need to set and clear, a single updater won't work
// Pinia also won't help because we need multiple, independent stores
// that are linked to components
interface DrawnSpectrumYWithUpdaters {
  drawnSpectrumY: Readonly<Ref<readonly number[]>>;
  clearDrawnSpectrumY: () => void;
  setBucket: (bucket: number, y: number) => void;
}
const drawnSpectrumYKey = Symbol() as InjectionKey<DrawnSpectrumYWithUpdaters>;
const createDrawnSpectrumYWithUpdaters = (): DrawnSpectrumYWithUpdaters => {
  const drawnSpectrumY = ref<number[]>([]);
  const clearDrawnSpectrumY = () => {
    drawnSpectrumY.value = [];
  };
  const setBucket = (bucket: number, y: number): void => {
    drawnSpectrumY.value[bucket] = y;
  };
  return {
    drawnSpectrumY: readonly(drawnSpectrumY),
    clearDrawnSpectrumY,
    setBucket,
  };
};
export const useDrawnSpectrumY = (): DrawnSpectrumYWithUpdaters => {
  let drawnSpectrumYWithUpdaters = inject(drawnSpectrumYKey, null);
  if (!drawnSpectrumYWithUpdaters) {
    drawnSpectrumYWithUpdaters = createDrawnSpectrumYWithUpdaters();
    provide(drawnSpectrumYKey, drawnSpectrumYWithUpdaters);
  }
  return drawnSpectrumYWithUpdaters;
};

// Component-scoped "are we currently drawing" flag
// Enables drawing off the edge of the canvas, and refreshing when drawing is done
interface CurrentlyDrawingWithUpdater {
  currentlyDrawing: Readonly<Ref<boolean>>;
  setCurrentlyDrawing: (newDrawing: boolean) => void;
}
const currentlyDrawingKey =
  Symbol() as InjectionKey<CurrentlyDrawingWithUpdater>;
const createCurrentlyDrawingWithUpdater = (): CurrentlyDrawingWithUpdater => {
  const currentlyDrawing = ref(false);
  const setCurrentlyDrawing = (newDrawing: boolean): void => {
    currentlyDrawing.value = newDrawing;
  };
  return {
    currentlyDrawing: readonly(currentlyDrawing),
    setCurrentlyDrawing,
  };
};
export const useCurrentlyDrawing = (): CurrentlyDrawingWithUpdater => {
  let currentlyDrawingWithUpdater = inject(currentlyDrawingKey, null);
  if (!currentlyDrawingWithUpdater) {
    currentlyDrawingWithUpdater = createCurrentlyDrawingWithUpdater();
    provide(currentlyDrawingKey, currentlyDrawingWithUpdater);
    const { currentlyDrawing, setCurrentlyDrawing } =
      currentlyDrawingWithUpdater;
    const stopDrawing = () => {
      if (currentlyDrawing.value) {
        setCurrentlyDrawing(false);
      }
    };
    onMounted(() => {
      window.addEventListener('pointerup', stopDrawing);
    });
    onUnmounted(() => {
      window.removeEventListener('pointerup', stopDrawing);
    });
  }
  return currentlyDrawingWithUpdater;
};
