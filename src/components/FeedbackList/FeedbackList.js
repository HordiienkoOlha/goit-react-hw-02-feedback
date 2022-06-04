import PropTypes from 'prop-types';
// import { Component } from 'react';

import s from './FeedbackList.module.css';

const FeedbackList = ({ onGood, onNeutral, onBad }) => {
  return (
    <ul className={s.list}>
      <li className={s.listItem}>
        <button type="button" className={s.button} onClick={onGood}>
          Good
        </button>
      </li>
      <li className={s.listItem}>
        <button className={s.button} onClick={onNeutral}>
          Neutral
        </button>
      </li>
      <li className={s.listItem}>
        <button type="button" className={s.button} onClick={onBad}>
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackList.propType = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};
export default FeedbackList;
