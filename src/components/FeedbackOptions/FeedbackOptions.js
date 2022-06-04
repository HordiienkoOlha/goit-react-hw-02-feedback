import { Component } from 'react';

import FeedbackList from 'components/FeedbackList/FeedbackList';

class FeedbackOptions extends Component {
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
    total: this.props.TotalInitial,
    positivePercentage: this.props.PositivePercentageInit,
  };
  HandleGood = () => {
    console.log('good');

    this.setState({ visible: true });
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    this.countTotalFeedback();
  };
  HandleNeutral = () => {
    console.log('neutral');
    this.setState({ visible: true });
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    this.countTotalFeedback();
  };
  HandleBad = () => {
    console.log('bad');
    this.setState({ visible: true });
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.total + 1,
    }));
  };
  //   countPositiveFeedbackPercentage = () => {
  //     const { good, total } = this.state;
  //     console.log(good === 0);
  //     console.log(good === 1);
  //     console.log(good === total);
  //     if (good === total) {
  //       this.setState({
  //         positivePercentage: this.props.PositivePercentageInit,
  //       });
  //     }
  //     this.setState({
  //       positivePercentage: Math.round((good * 100) / total),
  //     });
  //   };
  render() {
    return (
      <FeedbackList
        onGood={this.HandleGood}
        onNeutral={this.HandleNeutral}
        onBad={this.HandleBad}
      />
    );
  }
}

export default FeedbackOptions;
