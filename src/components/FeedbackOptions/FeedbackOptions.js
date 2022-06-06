import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul className={s.list}>
        {options.map(option => (
          <li key={option} className={s.listItem}>
            <button
              type="button"
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

// <ul className={s.list}>
//   <li className={s.listItem}>
//     <button type="button" className={s.button} onClick={onGood}>
//       Good
//     </button>
//   </li>
//   <li className={s.listItem}>
//     <button className={s.button} onClick={onNeutral}>
//       Neutral
//     </button>
//   </li>
//   <li className={s.listItem}>
//     <button type="button" className={s.button} onClick={onBad}>
//       Bad
//     </button>
//   </li>
// </ul>
