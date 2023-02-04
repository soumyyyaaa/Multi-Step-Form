import './App.css';
import Sidebar from "../src/Components/Sidebar"
import PersonalInfo from "./Pages/PersonalInfo"
import React from 'react';

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <PersonalInfo />
      break;
    default:

    }
    return (
      <>
          <Sidebar />
          {component}
    </>
  );
}

export default App;
