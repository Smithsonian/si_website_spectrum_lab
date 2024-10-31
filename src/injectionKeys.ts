import { ref, type InjectionKey, type Ref, type UnwrapRef } from 'vue';

export interface RefWithUpdater<T> {
  // This is more complicated than expected due to ref unwrapping,
  // but doesn't seem to lead to any issues
  ref: Ref<T, T> | Ref<UnwrapRef<T>, T | UnwrapRef<T>>;
  update(newValue: T): void;
}
export function createRefWithUpdater<T>(defaultValue: T): RefWithUpdater<T> {
  const xPointerLocationRef = ref(defaultValue);
  return {
    ref: xPointerLocationRef,
    update(newValue: T) {
      xPointerLocationRef.value = newValue;
    },
  };
}

// Chart zoom
export const zoomKey = Symbol() as InjectionKey<Ref<number>>;
// Chart draws lines or only points
export const showLinesKey = Symbol() as InjectionKey<Ref<boolean>>;
// Chart pointer position, for cursor
export const xPointerLocationKey = Symbol() as InjectionKey<
  RefWithUpdater<number | null>
>;
