import PropTypes from 'prop-types';

// import Notification from 'components/Notification';

import './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  // visible,
}) => {
  return (
    <>
      {/* {visible ? ( */}
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage} %</li>
      </ul>
      {/* ) : (
        <Notification message="There is no feedback"></Notification>
      )} */}
    </>
  );
};
Statistics.propType = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
