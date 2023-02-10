import './App.css';
import Sidebar from "../src/Components/Sidebar"
import PersonalInfo from "./Pages/PersonalInfo"
import React from 'react';
import SelectPlan from "../src/Pages/SelectPlan"
import Addons from './Pages/Addons';

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <PersonalInfo />
      break;
    case "/selectplan":
      component = <SelectPlan />
      break;
    case "/addons":
      component = <Addons />
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
