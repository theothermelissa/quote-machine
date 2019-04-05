import React, { Component } from 'react';
import quoteList from '../common/quoteList';

class TweetButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteText: quoteList[this.props.quote].statement,
      quoteAuthor: quoteList[quote].speaker,
      // tweet: "Damn the torpedoes, full speed ahead. --Whatsisname"
    };
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.quote !== this.state.quote
  //   ) {
  //     var toTweet = TweetableQuote(this.state.quote)
  //   }
  // }

  render() {
    const setTweet = () => {
      console.log("Setting Tweet");
      const newTweet = this.state.quoteText + " " + this.state.quoteAuthor;
    }

    return (
      <a 
        href="twitter.com/intent/tweet" 
        className="twitter-share-button" 
        data-text={setTweet()} 
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