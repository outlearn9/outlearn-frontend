import React, { useEffect, useState, useContext } from 'react';
import Header from '../Header/Header';
import Footer from '../Shared/Footer';
import LandingPageContainer from './Components/LandingPageContainer';
import '../LandingPageContainer/LandingPage.scss';
import SubNavbar from './Components/SubNavbar';

const LandingPage = () => {

  return (
    <>
      <Header />
      <div className="bg-white pb-5">
        <SubNavbar />
        <LandingPageContainer />
      </div>
      <Footer />
    </>
  )
}

export default LandingPage;