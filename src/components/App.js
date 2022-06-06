import React, { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';
import FeedbackOptions from './FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  LeaveFeedback = e => {
    const stateKey = e.target.name;
    this.setState(itemState => ({
      [stateKey]: itemState[stateKey] + 1,
    }));
  };
  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
    // this.setState(
    //   prevState => prevState.good + prevState.neutral + prevState.bad
    // );
  }
  // countPositiveFeedbackPercentage = () => {
  //   return this.setState( positivePercentage: Math.round((good * 100) / total) });
  // };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return good >= 1
      ? ((good / this.countTotalFeedback()) * 100).toFixed(0)
      : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const {
      LeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={LeaveFeedback}
          />
        </Section>
        {countTotalFeedback() !== 0 ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
export default App;

// <FeedbackOptions
//   options={InitialData}
//   onLeaveFeedback={this.leaveFeedback}
// />
// /  HandleGood = () => {
//     console.log('good');

//     this.setState({ visible: true });
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//     }));
//     this.countTotalFeedback();
//     this.countPositiveFeedbackPercentage();
//   };
//   HandleNeutral = () => {
//     console.log('neutral');
//     this.setState({ visible: true });
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//     }));
//     this.countTotalFeedback();
//     this.countPositiveFeedbackPercentage();
//   };
//   HandleBad = () => {
//     console.log('bad');
//     this.setState({ visible: true });
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//     }));
//     this.countTotalFeedback();
//     this.countPositiveFeedbackPercentage();
//   };
//   countTotalFeedback = () => {
//     this.setState(prevState => ({
//       total: prevState.total + 1,
//     }));
//   };
//   countPositiveFeedbackPercentage = () => {
//     const { good, total } = this.state;
//     console.log(good);
//     console.log(good === 0);
//     console.log(good === 1);
//     console.log(good === total);
//     // if (good === total) {
//     //   this.setState({
//     //     positivePercentage: this.props.PositivePercentageInit,
//     //   });
//     // }
//     this.setState({
//       positivePercentage: Math.round((good * 100) / total),
//     });
//   };
