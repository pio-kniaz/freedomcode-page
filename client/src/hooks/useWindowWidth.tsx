import { useState, useEffect } from 'react';

function getWidth():number {
  return window.innerWidth;
}
interface IuseWindowWidthResult {
  width: number;
}
export const useWindowWidth = (): IuseWindowWidthResult| any => {
  const [width, setWidth] = useState<number>(getWidth());
  const updateWidth = () => setWidth(getWidth());
  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  return { width };
};
