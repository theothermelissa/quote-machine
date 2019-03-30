import React, { Component } from 'react';
import styled from 'styled-components';
import { black, charcoal, darkgray, gray, lightgray } from './Colors';
import LeftQuotes from '../images/LeftQuotes.png';

const navbar = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  color: ${lightgray};
  background-color: ${black};
  justify-content: space-between;
`;

const logoContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-between;
`;


const logo = styled.img`

`;

const Header = () => {
  return (
    <navbar>
      <logo src={LeftQuotes} alt="Logo" />
    </navbar>
  );
};

export default Header;