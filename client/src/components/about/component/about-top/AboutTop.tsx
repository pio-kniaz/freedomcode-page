import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Loader from 'components/shared/loader/Loader';
import { useWindowWidth } from 'hooks/useWindowWidth';

import './about-top.scss';

type Date = {
  isReady: boolean,
  years: number | null,
  days: number | null,
  hours: number | null,
  minutes: number | null,
  seconds: number | null,
}


const AboutTop: React.FC = () => {
  const { width } = useWindowWidth();

  const [date, setDates] = useState<Date>({
    isReady: false,
    years: null,
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  });
  const prepareDates = () => {
    const currentDate = moment();
    const startDate = moment('2017-01-01');
    const years = currentDate.diff(startDate, 'years');
    const days = currentDate.diff(startDate, 'days');
    const hours = currentDate.diff(startDate, 'hours');
    const minutes = currentDate.diff(startDate, 'minutes');
    const seconds = currentDate.diff(startDate, 'seconds');
    setDates({
      isReady: true,
      years,
      days,
      seconds,
      hours,
      minutes,
    });
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (width >= 992) {
      const dateInterval = setInterval(() => {
        prepareDates();
      }, 1000);
      return () => clearInterval(dateInterval);
    }
    setDates({ ...date, isReady: true });
  }, [width]);
  const {
    isReady, years, days, hours, minutes, seconds,
  } = date;

  return (
    <div className="about-top row">
      {(isReady && Object.values(date).every((e) => !!e)) || width < 992 ? (
        <>
          <div className="about-top__time col-lg-4">
            <div className="about-top__time-content">
              <div className="about-top__years">
                <span>{years}</span>
                <p>years.</p>
              </div>
              <div className="about-top__days">
                <span>{days}</span>
                <p>days.</p>
              </div>
              <div className="about-top__hours">
                <span>{hours}</span>
                <p>hours.</p>
              </div>
              <div className="about-top__minutes">
                <span>{minutes}</span>
                <p>minutes.</p>
              </div>
              <div className="about-top__seconds">
                <span>{seconds}</span>
                <p>seconds.</p>
              </div>
              <p className="about-top__spent">
                Spent making web applications...
              </p>
            </div>
          </div>
          <div className="about-top__desc col-lg-8 col-md-12">
            <div className="about-top__content">
              <h2>Professional</h2>
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
        </>

      ) : (
        <div className="about-top__lodaing">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default React.memo(AboutTop);
