// import { Component } from 'react';
import s from './FeedbackOptions.module.css';
// import FeedbackList from 'components/FeedbackList/FeedbackList';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.list}>
      {options.map(({ id, rate }) => (
        <li key={id} className={s.listItem}>
          <button type="button" className={s.button} onClick={onLeaveFeedback}>
            {rate}
          </button>
        </li>
      ))}
    </ul>
  );
};

// const FeedbackOptions = () => {
//   // HandleGood = () => {
//   //   console.log('good');

//   //   this.setState({ visible: true });
//   //   this.setState(prevState => ({
//   //     good: prevState.good + 1,
//   //   }));
//   //   this.countTotalFeedback();
//   // };
//   // HandleNeutral = () => {
//   //   console.log('neutral');
//   //   this.setState({ visible: true });
//   //   this.setState(prevState => ({
//   //     neutral: prevState.neutral + 1,
//   //   }));
//   //   this.countTotalFeedback();
//   // };
//   // HandleBad = () => {
//   //   console.log('bad');
//   //   this.setState({ visible: true });
//   //   this.setState(prevState => ({
//   //     bad: prevState.bad + 1,
//   //   }));
//   //   this.countTotalFeedback();
//   // };

//   // countTotalFeedback = () => {
//   //   this.setState(prevState => ({
//   //     total: prevState.total + 1,
//   //   }));
//   // };
//   //   countPositiveFeedbackPercentage = () => {
//   //     const { good, total } = this.state;
//   //     console.log(good === 0);
//   //     console.log(good === 1);
//   //     console.log(good === total);
//   //     if (good === total) {
//   //       this.setState({
//   //         positivePercentage: this.props.PositivePercentageInit,
//   //       });
//   //     }
//   //     this.setState({
//   //       positivePercentage: Math.round((good * 100) / total),
//   //     });
//   //   };

//   return (
//     <FeedbackList
//       onGood={this.HandleGood}
//       onNeutral={this.HandleNeutral}
//       onBad={this.HandleBad}
//     />
//   );
// };

export default FeedbackOptions;
