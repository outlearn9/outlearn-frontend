import React, { useEffect, useState, useContext } from 'react';
import Header from '../Header/Header';
import Footer from '../Shared/Footer';
import LandingPageContainer from './Components/LandingPageContainer';
import '../LandingPageContainer/LandingPage.scss';
import SubNavbar from './Components/SubNavbar';

const LandingPage = () => {

  const greeting = "Hi Ankita Trived"

  return (
    <>
      <Header />
      <div className="bg-white pb-5">
        <SubNavbar />
        <LandingPageContainer greeting={greeting} />
      </div>
      <Footer />
    </>
  )
}

export default LandingPage;