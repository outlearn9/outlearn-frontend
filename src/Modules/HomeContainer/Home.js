import React, { useEffect, useState, useContext } from 'react';
import Header from '../Header/Header';
import CardComponent from '../CardComponent/CardComponent';
import { Context } from '../../Store/Store';
import { ApiCall } from '../Controller/Controller';

const Home = () => {


  const [state, dispatch] = useContext(Context);

  const { switchHome } = state;
  // const [switchHome , setSwitchHome ] = useState(sHome);

  useEffect(() => {
    resScrOne();
    resScrTwo();
  }, []);

  const reqHeader = new Headers();
  reqHeader.append('Content-Type', 'text/json');
  const scrOneReqObj = {
    method: 'GET', headers: reqHeader,
  };

  const resScrOne = async () => {
    let response = await ApiCall('/api/v1/specialisation', scrOneReqObj);
    if (response.status == 200) {
      dispatch({ type: 'SET_SCRONE_OPT', scrOneOpt: response.data })
    }
  }

  const resScrTwo = async () => {
    let response = await ApiCall('/api/v1/getHigherStudy', scrOneReqObj);
    if (response.status == 200) {
      dispatch({ type: 'SET_SCRTWO_OPT', scrTwoOpt: response.data })
    }
  }

  return (
    <>
      <Header />
      {!window.location.pathname.match('/Home') ? <CardComponent /> : ''}

    </>
  )
}

export default Home;