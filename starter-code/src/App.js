import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from  './Components/Navbar'
import FormField from './Components/FormField'
import CoolButton from './Components/CoolButton'
import SignUp from './Components/SignUp'

function App() {
  return (
    <div>
      <Navbar/>
      <FormField></FormField>
      <CoolButton></CoolButton>
      <SignUp></SignUp>
    </div>
  );
}

export default App;
