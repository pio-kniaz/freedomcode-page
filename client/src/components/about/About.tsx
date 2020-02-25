import React, {
  useEffect, useRef,
} from 'react';
import './about.scss';
import { useSkew } from 'hooks/useSkew';

interface Props {

}

const About: React.FC = () => {
  const wrapperNode = useRef<HTMLDivElement>(null);
  const topLayer = useRef<HTMLDivElement>(null);

  const { delta } = useSkew(wrapperNode, 'vertical');

  useEffect(() => {
    if (topLayer.current && delta) {
      topLayer.current.style.width = `${delta}px`;
    }
  }, [delta]);
  return (
    <div className="about">
      <div ref={wrapperNode} className="about__wrapper">
        <div className="about__layer about__bottom">
          <div className="about__content-wrap">
            <div className="about__info about__info--right">
              <h2>Wow, a whole page just about me!</h2>
              <div className="about__row">
                <div className="about__col">
                  COLS
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={topLayer} className="about__layer about__top">
          <div className="about__content-wrap">
            <div className="about__info about__info--left">
              <h2>Wow, a whole page just about me!</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
