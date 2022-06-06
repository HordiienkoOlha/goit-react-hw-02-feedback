import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <ul className={s.list}>
        {options.map(option => (
        <li key={option} className={s.listItem}>
        <button
          key={option}
          name={option}
          className={s.button}
          onClick={onLeaveFeedback}
        >
          {option}
            </button>
            </li>
      ))}
        </ul>
    </>
  );
};

FeedbackOptions.propType = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;