import React, { Component } from 'react';
import styled from 'styled-components';
import { black, charcoal, darkgray, gray, lightgray } from './Colors';
import beachBackground from '../images/beachBackground.jpeg';


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
  margin: 0px;
  background-color: white;
  box-shadow: 7px 5px 15px black;
  `;

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
  
  const BackgroundImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    margin: 0px;
    padding: 0px;
    width: auto;
    height: inherit;
  `;

const Quote = styled.p`
  position: absolute;
  color: white;
  background-color: transparent;
  font-weight: bold;
  font-size: 1.3em;
  text-shadow: 3px 3px 5px black;
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



class BodyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 1,
      speaker: 1,
      background: 1
    };
  }

  render() {
    return (
      <BodyContainer>
        {/* <img src={beachBackground} alt='Beach' /> */}
        <Polaroid>
          <QuoteBox>
            <BackgroundImage src={beachBackground} alt="Beach" />
            <Quote>"I don't know; where do you want to go?"</Quote>
          </QuoteBox>
          <CitationBox>
            <Citation>--Whatsisname</Citation>
          </CitationBox>
        </Polaroid>
      </BodyContainer>
    )
  }
};

export default BodyContent;