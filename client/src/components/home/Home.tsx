import React, {
  useEffect, useRef,
} from 'react';
import './home.scss';

import { useWindowWidth } from 'hooks/useWindowWidth';
import { useSkew } from 'hooks/useSkew';
import withBlur from 'hoc/with-blur/withBlur';

const Home: React.FC = () => {
  const { width } = useWindowWidth();
  const wrapperNode = useRef<HTMLDivElement>(null);
  const topLayer = useRef <HTMLDivElement>(null);

  const { delta } = useSkew(wrapperNode, 'diagonal');

  useEffect(() => {
    if (topLayer.current && delta) {
      topLayer.current.style.width = `${delta}px`;
    }
  }, [delta]);

  return (
    <div className="home">
      <div ref={wrapperNode} className="home__wrapper">
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
      </div>
    </div>
  );
};

export default withBlur(Home);
