import React, {
  useEffect, useRef,
} from 'react';
import './about.scss';
import { useSkew } from 'hooks/useSkew';

interface Props {

}

const About: React.FC = () => {
  const aboutWrapper = useRef<HTMLDivElement>(null);
  const topLayer = useRef<HTMLDivElement>(null);

  const { delta } = useSkew(aboutWrapper, 'vertical');

  useEffect(() => {
    if (topLayer.current && delta) {
      topLayer.current.style.width = `${delta}px`;
    }
  }, [delta]);
  return (
    <div className="about">
      <div ref={aboutWrapper} className="about__wrapper">
        <div className="about__skewed">
          <div className="about__layer about__bottom">
            <div className="about__content-wrap">
              <div className="about__frame about__frame--white">
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

          <div ref={topLayer} className="about__layer about__top">
            <div className="about__content-wrap">
              <div className="about__frame about__frame--black">
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

export default About;
