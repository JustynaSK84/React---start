import React from 'react';
import Container from '../Container/Container';
import { infoSubPage } from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero titleText={infoSubPage.navTitle} image={infoSubPage.image} />
    <p>{infoSubPage.content}</p>
  </Container>
);

export default Info;