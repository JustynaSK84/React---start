import React from 'react';
import Container from '../Container/Container';
import { faqSubPage } from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Faq = () => (
  <Container>
    <Hero titleText={faqSubPage.navTitle} image={faqSubPage.image} />
    <p>{faqSubPage.content}</p>
  </Container>
);

export default Faq;