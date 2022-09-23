import React from 'react';
import Container from 'components/Container';
import Header from './components/Header';
import './index.style.scss';

const HomePage: React.FC = () => {
  return (
    <Container className="tw-bg-purple-3 container">
      <Header />

    </Container>
  )
}

export default HomePage;