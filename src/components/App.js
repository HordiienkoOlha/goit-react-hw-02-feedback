import { Component } from 'react';
import Section from './Section';

import Statistics from './Statistics';
import Notification from './Notification';
import FeedbackOptions from './FeedbackOptions';

class App extends Component {
  static defaultProps = {
    goodInitialValue: 0,
    neutralInitialValue: 0,
    badVInitialValue: 0,
    TotalInitial: 0,
    PositivePercentageInit: 100,
  };
  static propTypes = {
    // goodInitialValue: PropTypes.number.isRequired,
    // neutralInitialValue: PropTypes.number.isRequired,
    // badVInitialValue: PropTypes.number.isRequired,
    // TotalInitial: PropTypes.number.isRequired,
    // PositivePercentageInit: PropTypes.number.isRequired,
  };
  state = {
    good: this.props.goodInitialValue,
    neutral: this.props.neutralInitialValue,
    bad: this.props.badVInitialValue,
    total: this.props.TotalInitial,
    positivePercentage: this.props.PositivePercentageInit,
    visible: false,
  };
  HandleGood = () => {
    console.log('good');

    this.setState({ visible: true });
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  HandleNeutral = () => {
    console.log('neutral');
    this.setState({ visible: true });
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
  };
  HandleBad = () => {
    console.log('bad');
    this.setState({ visible: true });
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
  };
  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.total + 1,
    }));
  };
  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
        console.log(good);
    console.log(good === 0);
    console.log(good === 1);
    console.log(good === total);
    // if (good === total) {
    //   this.setState({
    //     positivePercentage: this.props.PositivePercentageInit,
    //   });
    // }
    this.setState({
      positivePercentage: Math.round((good * 100) / total),
    });
  };

  render() {
    const { good, neutral, bad, total, positivePercentage, visible } = this.state;
    return (
      <>
        <Section title={'Please leave feedback'}>
          {/* <FeedbackOptions /> */}

          <FeedbackOptions
            onGood={this.HandleGood}
            onNeutral={this.HandleNeutral}
            onBad={this.HandleBad}
          />
        </Section>
        <Section title={'Statistics'}>
          { visible ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
           : (<Notification message="There is no feedback"></Notification>
          )} 
        </Section>
      </>
    );
  }
}
export default App;

// <FeedbackOptions
//   options={InitialData}
//   onLeaveFeedback={this.leaveFeedback}
// />
//   // HandleBad = () => {
//   //   console.log('bad');
//   //   this.setState({ visible: true });
//   //   this.setState(prevState => ({
//   //     bad: prevState.bad + 1,
//   //   }));
//   //   this.countTotalFeedback();
//   // };
// onLeaveFeedback={this.countPositiveFeedbackPercentage}

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
