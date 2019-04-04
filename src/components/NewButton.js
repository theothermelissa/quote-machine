import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  box-sizing: content-box;
  background-color: slategray;
  width: 250px;
  height: 30px;
  margin-top: 1vh;
  color: white;
  border-color: black;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1em;
  box-shadow: 5px 3px 5px black;
`;

const NewButton = (props) => {
  return (
  <Button {...props} />
  );
}

export default NewButton;