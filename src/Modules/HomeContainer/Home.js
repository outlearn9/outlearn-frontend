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
    const reqHeader = new Headers();
    reqHeader.append('Content-Type', 'text/json');
    let scrOneReqObj = {
      method: 'GET', headers: reqHeader,
    };
      let res = async () => {
          let response = await (ApiCall('/api/v1/specialisation', scrOneReqObj));
          return response;
      }

      // let res = ApiCall('/api/v1/specialisation', scrOneReqObj)
      console.log(res());

    // dispatch({ type: 'SET_SWITCH_HOME', switchHome: false })
  }, []);

  return (
    <>
      <Header />
      {!window.location.pathname.match('/Home') ? <CardComponent /> : ''}

    </>
  )
}

export default Home;