import { useCallback } from 'react';
import { debounce } from 'lodash';

const useDebounce = (callback, delay) => {
  const debouncedFn = useCallback(debounce((...args) => callback(...args), delay), [delay]);
  return debouncedFn;
}

export default useDebounce;