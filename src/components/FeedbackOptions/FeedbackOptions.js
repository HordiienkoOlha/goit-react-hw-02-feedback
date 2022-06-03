// import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

const FeedbackOptions = () => {
  return (
    <ul className={s.list}>
      <li className={s.listItem}>
        <button className={s.button}>Good</button>
      </li>
      <li className={s.listItem}>
        <button className={s.button}>Neutral</button>
      </li>
      <li className={s.listItem}>
        <button className={s.button}>Bad</button>
      </li>
    </ul>
  );
};
export default FeedbackOptions;
