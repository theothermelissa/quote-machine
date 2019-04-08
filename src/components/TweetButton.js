import React, { Component } from 'react';
import quoteList from '../common/quoteList';
// import Tweet from './Tweet';

class TweetButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: this.props.quote
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.quote !== this.state.quote
  //   ) {
  //     var toTweet = TweetableQuote(this.state.quote)
  //   }
  // }

  render() {
    // let newTweet = "";
    // const setTweet = () => {
    //   console.log("Setting Tweet");
    //   newTweet = this.state.quoteText + " " + this.state.quoteAuthor;
    //   console.log("New Tweet: ", newTweet);
    // }
    let QuoteText = () => quoteList[this.state.quote].statement;
    let QuoteAuthor = () => quoteList[this.state.quote].speaker;
    let TweetableQuote = () => QuoteText() + " " + QuoteAuthor();

    return (
      <a 
        href="twitter.com/intent/tweet" 
        className="twitter-share-button" 
        data-text={TweetableQuote()} 
        data-size="large" 
        data-url="invalid" 
        data-via="quotaquote" 
        data-show-count="false">
          Tweet
      </a>
    )
  }
};

export default TweetButton;