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
              <h2>Just about me!</h2>
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
              <h2>Just about me!</h2>
              <div className="about__row row">
                <div className="about__row-image col-lg-4">
                  <div className="about__row-me" />
                </div>
                <div className="about__row-desc col-lg-8 col-md-12">
                  <div className="about__row-desc-content">
                    <h2>In short about me...</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis, veritatis ex.
                      Reprehenderit cumque non ipsum vero quas quo culpa repellendus!
                      Inventore soluta
                      animi culpa ipsam similique ullam laboriosam ad quam!
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
                      nihil assumenda
                      accusantium obcaecati deleniti adipisci officiis itaque, tenetur
                      placeat architecto
                      unde nisi! Quia enim numquam quam necessitatibus maxime pariatur
                      dolorem Lorem ipsum,
                      dolor sit amet consectetur adipisicing elit. Qui debitis asperiores
                      explicabo
                      atque placeat expedita accusantium quaerat est eum, excepturi nulla
                      tempore totam,
                      repellendus quod dicta fugiat. Suscipit, soluta illum!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
