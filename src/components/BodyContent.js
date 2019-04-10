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
  align-items: center;
  justify-content: center;
  position: relative;
  width: inherit;
  height: 240px;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  `;

const QuoteHolder = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  /* align-self: center; */
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 80%;
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
const quoteText = (quote) => quoteList[quote].statement;
const quoteAuthor = (quote) => quoteList[quote].speaker;
const quoteTweet = (quote) => quoteText(quote) + " " + quoteAuthor;


class BodyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: randomQuote(),
      background: randomBackground(),
    };
  }
  
  render() {
    const insertTweetHTML = () => {
      // console.log("TweetableQuote: ", TweetableQuote());
      return `<a
      id="tweet-quote"
      href="https://twitter.com/intent/tweet" 
      className="twitter-share-button" 
      data-text="` + quoteTweet(this.state.quote) + 
      `" data-via="quotaquote" 
      data-url="invalid" 
      data-show-count="false">
      Tweet
      </a>`;
    };

    const logTweet = () => console.log("This.State.Tweet: ", this.state.tweet);
    const setBackground = () => {
      this.setState({background: randomBackground()});
    };
    const setQuote = () => {
      console.log("Setting Quote");
      const newQuote = randomQuote();
      this.setState({quote: newQuote});
    };
    
    const setTweet = () => {
      console.log("Setting Tweet");
      let newTweet = quoteTweet(this.state.quote)
      console.log("New Tweet: ", newTweet);
    };

    return (
      <BodyContainer id="quote-box">
        <Polaroid>
          <ImageBox>
            <BackgroundImage 
              {...this.state} 
              src={backgrounds[this.state.background].image} 
              alt={backgrounds[this.state.background].alt} />
            <QuoteHolder>
              <Quote id="text">{quoteText(this.state.quote)}</Quote>
            </QuoteHolder>
          </ImageBox>
          <CitationBox>
            <Citation id="author">{quoteAuthor(this.state.quote)}</Citation>
          </CitationBox>
        </Polaroid>
        <NewButton id="new-quote" onClick={setQuote}>New Quote</NewButton>
        <NewButton onClick={setBackground}>New Background</NewButton>
        <div dangerouslySetInnerHTML={{__html: insertTweetHTML()}} />
      </BodyContainer>
    )
  }
};

export default BodyContent;