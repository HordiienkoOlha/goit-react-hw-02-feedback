import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';

class App extends Component {
  state = {
    title: 'Please leave feedback',
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    const { title } = this.state;
    return (
      <Section title={title}>
        <FeedbackOptions />
        {/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> 
        <<Statistics good={} neutral={} bad={} total={} positivePercentage={}>></Statistics>
        */}
      </Section>
    );
  }
}

export default App;
