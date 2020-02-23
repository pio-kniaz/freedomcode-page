import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import './home.scss';

import { useWindowWidth } from 'hooks/useWindowWidth';

import throttle from 'lodash.throttle';

const Home: React.FC = () => {
  const { width } = useWindowWidth();
  const [delta, setDelta] = useState<number>(0);
  const aboutWrapper = useRef<HTMLDivElement>(null);
  const topLayer = useRef <HTMLDivElement>(null);

  useEffect(() => {
    if (topLayer.current && delta) {
      topLayer.current.style.width = `${delta}px`;
    }
  }, [delta]);

  const throttledSetSkew = throttle((e: { clientX: number; }):void => {
    const deltaMath: number = ((e.clientX - width / 2) * 0.5);
    const finalSkew: number = deltaMath + e.clientX + 992;
    setDelta(Math.round(finalSkew));
  }, 12);

  const throttledSetSkewCallback = useCallback(throttledSetSkew, []);

  useEffect(() => {
    const handler = aboutWrapper.current;
    if (handler) {
      handler.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 992) {
          throttledSetSkewCallback(e);
        }
      });
    }
    // eslint-disable-next-line consistent-return
    return () => {
      if (handler) {
        return handler.removeEventListener('mousemove', (e) => throttledSetSkewCallback(e));
      }
    };
  }, [throttledSetSkewCallback]);

  return (
    <div className="home">
      <div ref={aboutWrapper} className="home__wrapper">
        {/*  */}
        <div className="home__skewed">
          <div className="home__layer home__bottom">
            <div className="home__content-wrap">
              {width > 992 && <div className="home__skills--top" />}
              <div className="home__frame home__frame--white">
                <p>
                  Piotr Kniaź
                </p>
                <span>
                  <strong>Back</strong>
                  {' '}
                  end Developer
                </span>
              </div>
            </div>
          </div>

          <div ref={topLayer} className="home__layer home__top">
            <div className="home__content-wrap">
              {width > 992 && <div className="home__skills--bottom" />}
              <div className="home__frame home__frame--black">
                <p>Piotr Kniaź</p>
                <span>
                  <strong>Front</strong>
                  {' '}
                  end Developer
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Home;
