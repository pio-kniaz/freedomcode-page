import { useState, useEffect } from 'react';

function getWidth():number {
  return window.innerWidth;
}
interface IuseWindowWidthResult {
  width: number;
}
export const useWindowWidth = (): IuseWindowWidthResult| any => {
  const [width, setWidth] = useState<number>(getWidth());
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(getWidth()));
    return window.removeEventListener('resize', () => setWidth(getWidth()));
  }, []);
  return { width };
};
