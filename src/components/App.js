import { GlobalStyle } from './GlobalStyle';
// import { Layout } from './Layout';
import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Layout } from './Layout';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = Object.keys(this.state);

  addVoice = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = values => {
    let total = 0;
    values.map(value => (total = total + value));
    return total;
  };

  countPositiveFeedbackPercentage = values => {
    return Math.round((values[0] / this.countTotalFeedback(values)) * 100);
  };

  render() {
    let values = Object.values(this.state);
    let feedback = this.countTotalFeedback(values);

    feedback === 0 ? (feedback = '') : (feedback = true);

    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.options} addVoice={this.addVoice} />
        </Section>
        {!feedback && <Notification />}
        <Section title="Statistics">
          {feedback && (
            <Statistics
              values={values}
              total={this.countTotalFeedback}
              percentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}
