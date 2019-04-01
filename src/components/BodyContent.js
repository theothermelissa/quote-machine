import React, { Component } from 'react';
import styled from 'styled-components';
import { black, charcoal, darkgray, gray, lightgray } from './Colors';
import beachBackground from '../images/beachBackground.jpeg';
import archBackground from '../images/archBackground.jpg';
import mountainLakeBackground from '../images/mountainLakeBackground.jpg';
import NewButton from './NewButton';
import quoteList from './quoteList';
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
  width: 250px;
  height: 292;
  padding: 5px 5px 5px 5px;
  margin: 0px 0px 50px 0px;
  background-color: white;
  box-shadow: 7px 5px 5px;
  `;
  
const backgrounds = [
  {
    image: beachBackground,
    alt: "Beach"},
  {
    image: archBackground,
    alt: "Arch"
  },
  {
    image: mountainLakeBackground,
    alt: "Mountain Lake"
  },
];

// const icons = [
//   {
//     twitter: 
//   }
// ]



const QuoteBox = styled.div`
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

const Quote = styled.p`
  position: absolute;
  color: white;
  background-color: transparent;
  font-weight: bold;
  font-size: 1.3em;
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

const ShareBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 30px;
  align-items: flex-start;
`;

const ShareIcon = styled.img`
  margin: 0px;
  padding: 0px;
  height: inherit;
  width: auto;
`;

class BodyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 1,
      background: 2
    };
  }

  render() {
    const randomBackground = () => Math.floor(Math.random() * backgrounds.length);
    const randomQuote = () => Math.floor(Math.random() * quoteList.length);
    console.log("RandomBackground: ", randomBackground());
    const setBackground = () => this.setState({background: randomBackground()});
    const setQuote = () => this.setState({quote: randomQuote()});
    return (
      <BodyContainer>
        <ShareBox>
          <ShareIcon />
        </ShareBox>
        <Polaroid>
          <QuoteBox>
            <BackgroundImage 
              {...this.state} 
              src={backgrounds[this.state.background].image} 
              alt={backgrounds[this.state.background].alt} />
            <Quote>{quoteList[this.state.quote].statement}</Quote>
          </QuoteBox>
          <CitationBox>
            <Citation>{quoteList[this.state.quote].speaker}</Citation>
          </CitationBox>
        </Polaroid>
        <NewButton onClick={setQuote} >New Quote</NewButton>
        <NewButton onClick={setBackground} >New Background</NewButton>
      </BodyContainer>
    )
  }
};

export default BodyContent;