import React, { Component } from 'react';
import styled from 'styled-components';
import { black, charcoal, darkgray, gray, lightgray } from '../common/Colors';
import NewButton from './NewButton';
import quoteList from '../common/quoteList';
import backgrounds from '../common/backgrounds';
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

const Quote = styled.p`
  position: absolute;
  color: white;
  background-color: transparent;
  font-weight: bold;
  font-size: 1.2em;
  text-shadow: 0px 0px 7px black;
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

// const ShareBox = styled.div`
//   display: flex;
//   /* flex-flow: row wrap; */
//   width: 250px;
//   /* height: 30px; */
//   /* align-items: flex-start; */
//   justify-content: flex-end;
//   margin-top: 1vh;
//   box-sizing: content-box;
//   padding: 0px;
// `;

class BodyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 6,
      background: 2,
      tweet: "Damn the torpedoes, full speed ahead. --Whatsisname"
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
    const QuoteText = (quote) => quoteList[quote].statement;
    const QuoteAuthor = (quote) => quoteList[quote].speaker;
    const randomBackground = () => Math.floor(Math.random() * backgrounds.length);
    const randomQuote = () => Math.floor(Math.random() * quoteList.length);

    const setTweet = (quote) => {
      console.log("Setting Tweet");
      const newTweet = QuoteText(quote) + " " + QuoteAuthor(quote);
      this.setState({tweet: newTweet});
    }
    const setBackground = () => {
      this.setState({background: randomBackground()});
    };
    const setQuote = () => {
      console.log("Setting Quote");
      const newQuote = randomQuote();
      this.setState({quote: newQuote, tweet: setTweet(newQuote)});
    };

    

    return (
      <BodyContainer>
        <Polaroid id="quote-box">
          <ImageBox>
            <BackgroundImage 
              {...this.state} 
              src={backgrounds[this.state.background].image} 
              alt={backgrounds[this.state.background].alt} />
            <Quote id="text">{QuoteText(this.state.quote)}</Quote>
          </ImageBox>
          <CitationBox>
            <Citation id="author">{QuoteAuthor(this.state.quote)}</Citation>
          </CitationBox>
        </Polaroid>
        <NewButton id="new-quote" onClick={setQuote}>New Quote</NewButton>
        <NewButton onClick={setBackground}>New Background</NewButton>
        <a 
          href="twitter.com/intent/tweet" 
          className="twitter-share-button" 
          data-text={this.state.tweet} 
          data-size="large" 
          data-url="invalid" 
          data-via="quotaquote" 
          data-show-count="false">
            Tweet
        </a>
      </BodyContainer>
    )
  }
};

export default BodyContent;