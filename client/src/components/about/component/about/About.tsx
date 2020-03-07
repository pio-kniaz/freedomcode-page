import React, {
  useEffect, useRef,
} from 'react';
import './about.scss';
import { useSkew } from 'hooks/useSkew';
import AboutTop from 'components/about/component/about-top/AboutTop';
import AboutBottom from 'components/about/component/about-bottom/AboutBottom';
import withBlur from 'hoc/with-blur/withBlur';

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
        <div ref={topLayer} className="about__layer about__bottom">
          <div className="about__info">
            <h2 className="about__title about__title--white">In short about me...</h2>
            <AboutBottom />
          </div>
        </div>
        <div className="about__layer about__top">
          <div className="about__info">
            <h2 className="about__title about__title--black">In short about me...</h2>
            <AboutTop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withBlur(About);
