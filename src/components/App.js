import { Component } from 'react';
import Section from './Section';

import Statistics from './Statistics';
// import Notification from './Notification';
import FeedbackOptions from './FeedbackOptions';
import data from './data/data.json';

class App extends Component {
static defaultProps = {
    goodInitialValue: 0,
    neutralInitialValue: 0,
    badVInitialValue: 0,
    TotalInitial: 0,
    PositivePercentageInit: 0,
  };
  static propTypes = {
    //
  };
  state = {
    good: this.props.goodInitialValue,
    neutral: this.props.neutralInitialValue,
    bad: this.props.badVInitialValue,
    // total: this.props.TotalInitial,
    // positivePercentage: this.props.PositivePercentageInit,
  };
  leaveFeedback = option => {
    console.log(option);
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    // this.countTotalFeedback();
};
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={'Please leave feedback'}>
          {/* <FeedbackOptions /> */}
          <FeedbackOptions
            options={data}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            // total={total}
            // positivePercentage={positivePercentage}
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
