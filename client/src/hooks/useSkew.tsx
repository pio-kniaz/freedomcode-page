import { useState, useEffect, useCallback } from 'react';
import throttle from 'lodash.throttle';

type node = {
  current: HTMLDivElement | null,
}
type skewType = 'vertical' | 'diagonal';
interface IUseSkewResult {
  delta: number;
}
export const useSkew = (node: node, skewType: skewType): IUseSkewResult => {
  const [delta, setDelta] = useState<number>(0);
  const throttledSetSkew = throttle((e: { clientX: number; }): void => {
    let finalSkew: number = 0;
    if (skewType === 'diagonal') {
      const deltaMath: number = ((e.clientX - window.innerWidth / 2) * 0.5);
      finalSkew = deltaMath + e.clientX + 992;
    } else {
      finalSkew = e.clientX + 10;
    }
    setDelta(Math.round(finalSkew));
  }, 12);

  const throttledSetSkewCallback = useCallback(throttledSetSkew, []);

  useEffect(() => {
    const handler = node.current;
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
  }, [throttledSetSkewCallback, node]);
  return { delta };
};
