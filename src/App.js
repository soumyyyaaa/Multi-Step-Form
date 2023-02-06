import './App.css';
import Sidebar from "../src/Components/Sidebar"
import PersonalInfo from "./Pages/PersonalInfo"
import React from 'react';
import SelectPlan from "../src/Pages/SelectPlan"

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <PersonalInfo />
      break;
    case "/selectplan":
      component = <SelectPlan />
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
