import React, { Component } from 'react';
import quoteList from '../common/quoteList';


class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: this.props.quote,
    };
  }
  
  render() {

    // let newTweet = "";
    // const setTweet = () => {
    //   console.log("Setting Tweet");
    //   newTweet = this.state.quoteText + " " + this.state.quoteAuthor;
    //   console.log("New Tweet: ", newTweet);
    // }

    return (
      // <TweetableQuote quote={this.state.quote} />
      <div />
    )
  }
};

export default Tweet;