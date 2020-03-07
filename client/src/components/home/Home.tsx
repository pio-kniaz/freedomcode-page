import React, {
  useEffect, useRef,
  useState,
} from 'react';
import './home.scss';

import { useWindowWidth } from 'hooks/useWindowWidth';
import { useSkew } from 'hooks/useSkew';
import withBlur from 'hoc/with-blur/withBlur';

const Home: React.FC = () => {
  const { width } = useWindowWidth();
  const wrapperNode = useRef<HTMLDivElement>(null);
  const topLayer = useRef <HTMLDivElement>(null);
  const [skippingText, setSkippingText] = useState<string>('Front');

  const { delta } = useSkew(wrapperNode, 'diagonal');

  useEffect(() => {
    if (topLayer.current && delta) {
      topLayer.current.style.width = `${delta}px`;
    }
  }, [delta]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (width <= 992) {
      const skippingTextInterval = setInterval(() => {
        if (skippingText === 'Front') {
          setSkippingText('Back');
        } else {
          setSkippingText('Front');
        }
      }, 1000);
      return () => clearInterval(skippingTextInterval);
    }
  }, [width, skippingText]);

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
                  {
                    width > 992 ? <strong>Back</strong> : <strong>{skippingText}</strong>
                  }
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
                  {
                    width > 992 ? <strong>Front</strong> : <strong>{skippingText}</strong>
                  }
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
