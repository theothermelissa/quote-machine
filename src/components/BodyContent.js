import React, { Component } from 'react';
import styled from 'styled-components';
import { black, charcoal, darkgray, gray, lightgray } from '../common/Colors';
import NewButton from './NewButton';
import quoteList from '../common/quoteList';
import backgrounds from '../common/backgrounds';
// import TweetButton from './TweetButton';
// import { QuoteText, QuoteAuthor, TweetableQuote } from './Quote';
// import { FontAwesomeIcon } from '@fortawesome/react-fonawesome';

const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${charcoal};
`;

const Polaroid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: content-box;
  width: 250px;
  height: 292;
  padding: 5px 5px 5px 5px;
  margin: 0px;
  background-color: white;
  box-shadow: 7px 5px 5px;
  `;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: inherit;
  height: 240px;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  `;

const QuoteBox = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  /* align-self: center; */
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 250px;
  height: 240px;
  margin: 0;
  padding: 15px;
  overflow: hidden;
`;

const Quote = styled.p`
  position: absolute;
  color: white;
  background-color: transparent;
  font-weight: bold;
  font-size: 1.2em;
  text-shadow: 0px 0px 10px black;
  text-transform: uppercase;
  `;

const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  margin: 0px;
  padding: 0px;
  width: auto;
  height: inherit;
`;

const CitationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  margin: 0px;
  padding: 0px;
  `;

const Citation = styled.h2`
  font-style: italic;
  color: ${darkgray};
  `;

const randomBackground = () => Math.floor(Math.random() * backgrounds.length);
const randomQuote = () => Math.floor(Math.random() * quoteList.length);

class BodyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: randomQuote(),
      background: 2,
      tweet: true
    };
  }
  
  render() {
    let QuoteText = () => quoteList[this.state.quote].statement;
    let QuoteAuthor = () => quoteList[this.state.quote].speaker;
    let TweetableQuote = () => {
      return(
        QuoteText() + " " + QuoteAuthor()
      );
    };

    const createTweetHTML = () => {
      // console.log("TweetableQuote: ", TweetableQuote());
      return `<a 
      href="https://twitter.com/share?ref_src=twsrc%5Etfw" 
      class="twitter-share-button" 
      data-text="` + TweetableQuote() + 
      `" data-via="quotaquote" 
      data-url="invalid" 
      data-show-count="false">
      Tweet
      </a>`;
      // return 'something'
    };

    const insertTweetHTML = () => {
      // console.log("TweetHTML: ", createTweetHTML())
      return {
        __html: createTweetHTML()
      }
    }; 

    // const setTweet = (quote) => {
    //   console.log("Setting Tweet");
    //   const newTweet = QuoteText(quote) + " " + QuoteAuthor(quote);
    //   this.setState({tweet: newTweet});
    // }
    const setBackground = () => {
      this.setState({background: randomBackground()});
    };

    const setQuote = () => {
      console.log("Setting Quote");
      const newQuote = randomQuote();
      // var elem = document.getElementById("tweet-button");
      // elem.remove();
      this.setState({quote: newQuote, tweet: true});
      window.twttr.widgets.load();
    };


    const tweetElement = this.state.tweet ? <div id="tweet-button" dangerouslySetInnerHTML={insertTweetHTML()} /> : null;

    return (
      <BodyContainer>
        <Polaroid id="quote-box">
          <ImageBox>
            <BackgroundImage 
              {...this.state} 
              src={backgrounds[this.state.background].image} 
              alt={backgrounds[this.state.background].alt} />
            <QuoteBox>
              <Quote id="text">{QuoteText(this.state.quote)}</Quote>
            </QuoteBox>
          </ImageBox>
          <CitationBox>
            <Citation id="author">{QuoteAuthor(this.state.quote)}</Citation>
          </CitationBox>
        </Polaroid>
        <NewButton id="new-quote" onClick={setQuote}>New Quote</NewButton>
        <NewButton onClick={setBackground}>New Background</NewButton>
        {/* <div id="tweet-button" dangerouslySetInnerHTML={insertTweetHTML()} /> */}
        {tweetElement}

      </BodyContainer>
    )
  }
};

export default BodyContent;