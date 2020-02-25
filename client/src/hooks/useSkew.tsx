import { useState, useEffect, useCallback } from 'react';
import throttle from 'lodash.throttle';

type params = {
  current: HTMLDivElement | null,
}
interface IUseSkewResult {
  delta: number;
}
export const useSkew = (data: params): IUseSkewResult => {
  const [delta, setDelta] = useState<number>(0);
  const throttledSetSkew = throttle((e: { clientX: number; }): void => {
    const deltaMath: number = ((e.clientX - window.innerWidth / 2) * 0.5);
    const finalSkew: number = deltaMath + e.clientX + 992;
    setDelta(Math.round(finalSkew));
  }, 12);

  const throttledSetSkewCallback = useCallback(throttledSetSkew, []);

  useEffect(() => {
    const handler = data.current;
    if (handler) {
      handler.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 992) {
          throttledSetSkewCallback(e);
        }
      });
    }
    // eslint-disable-next-line consistent-return
    return ():void => {
      if (handler) {
        return handler.removeEventListener('mousemove', (e) => throttledSetSkewCallback(e));
      }
    };
  }, [throttledSetSkewCallback]);
  return { delta };
};
