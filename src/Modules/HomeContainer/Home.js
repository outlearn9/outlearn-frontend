import React, { useEffect, useState , useContext } from 'react';
import Header from '../Header/Header';
import CardComponent from '../CardComponent/CardComponent';
import { Context } from '../../Store/Store';

const Home = () => {

  
  const [state, dispatch] = useContext(Context);

  const {switchHome} = state;
  // const [switchHome , setSwitchHome ] = useState(sHome);

// useEffect(()=>{
//    if(switchHome && !window.location.pathname.match('/Home')){
//      dispatch({ type: 'SET_SWITCH_HOME', switchHome: false  })
//    }
// });

  return (
    <>
      <Header />
      {!window.location.pathname.match('/Home')?<CardComponent/>:''}
      
    </>
  )
}

export default Home;