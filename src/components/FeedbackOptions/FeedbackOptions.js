import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
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

FeedbackOptions.propType = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,

};
export default FeedbackOptions;
