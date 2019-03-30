import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: slategray;
  width: 100px;
  height: 30px;
  margin: 40px;
  color: white;
  border-color: black;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1em;
  box-shadow: 5px 3px 5px black;
`;

const NewQuoteButton = () => {
  return (
  <Button>Hit Me</Button>
  );
}

export default NewQuoteButton;