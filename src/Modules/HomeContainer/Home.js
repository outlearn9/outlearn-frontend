import React from 'react';
import Header from '../Header/Header';
import CardComponent from '../CardComponent/CardComponent';

const Home = () => {


  return (
    <>
      <Header />
      <div className="card-main-wrapper">
        <CardComponent/>
      </div>
    </>
  )
}

export default Home;