import React, { Component } from 'react';
// import quoteList from '../common/quoteList';
// import Tweet from './Tweet'

const TweetMarkup = `
<a 
href="twitter.com/intent/tweet" 
className="twitter-share-button" 
data-text={this.state.quote} 
data-size="large" 
data-url="invalid" 
data-via="quotaquote" 
data-show-count="false">
Tweet
</a>
`;

class TweetButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: this.props.quote,
    }
  }

  componentWillUpdate(nextProps) {
    window.twttr.widgets.load();
    if (nextProps.quote !== this.props.quote) {
      console.log("Updated to: ", nextProps.quote)
    };
  };


  render() {
    // let newTweet = "";
    // const setTweet = () => {
    //   console.log("Setting Tweet");
    //   newTweet = this.state.quoteText + " " + this.state.quoteAuthor;
    //   console.log("New Tweet: ", newTweet);
    // }
    // let QuoteText = () => quoteList[this.state.quote].statement;
    // let QuoteAuthor = () => quoteList[this.state.quote].speaker;
    // let TweetableQuote = () => QuoteText() + " " + QuoteAuthor();

    return (
      <div dangerouslySetInnerHTML={{ __html: TweetMarkup }}></div>
    )
  }
};

export default TweetButton;