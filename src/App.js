import React, { useState } from 'react';
import Modal from 'react-modal';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

Modal.setAppElement('#root')
const App = () => {
  const [data, setData] = useState([]);
  return (
    <>
      <Nav />
      <Header />
      <Switch>
        <Route path="/" component={() => <Home data={data} setData={setData} />} exact />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
