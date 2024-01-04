import React from 'react';
import './assets/common.css';
import Home from './pages/Home';
import Header from './component/Header';
import Footer from './component/Footer';

const App = () => {
  return (
    <div id="wrap">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;