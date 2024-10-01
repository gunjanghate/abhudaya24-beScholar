import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
    <header>
      <Header />
    </header>
    <main>
      <Body />
    </main>

    <footer>
      <Footer/>
    </footer>
  </>
  );
};

export default HomePage;