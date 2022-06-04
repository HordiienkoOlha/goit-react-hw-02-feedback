import { Component } from 'react';
import Section from './Section';

import Statistics from './Statistics';
// import Notification from './Notification';
import FeedbackOptions from './FeedbackOptions';
// import s from 'components/FeedbackList/FeedbackList.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions />
          {/* <FeedbackOptions options={visible} />/ */}
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
          {/* ) : (<Notification message="There is no feedback"></Notification>
          )} */}
        </Section>
      </>
    );
  }
}
export default App;

// onLeaveFeedback={this.countPositiveFeedbackPercentage}
// <FeedbackOptions options={visible} onLeaveFeedback={}/>
