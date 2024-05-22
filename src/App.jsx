import { useState, createContext, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

export const GeneralContext = createContext();

export default function App() {
  const navigate = useNavigate();

  return (

    <GeneralContext.Provider value={{ navigate }}>
      {/* <Navbar />
        <Router /> */}
      {/* {popUpLogin && <PopUpLogin />}
        {snackbarText && <SnackBar text={snackbarText} />} */}
      {/* <Footer /> */}
    </GeneralContext.Provider>

  );
}


