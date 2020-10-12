import React, {useEffect, useState} from 'react';
import AppRouter from './Router';
import {authService} from "../fBase";

function App() {
  const [init, setInit] = useState(false);
  let [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  },[]);

  return ( 
    <>
    {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "initializing"}
    </>
  )
};

export default App;
