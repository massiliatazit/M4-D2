import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./Components/MyNav"
import MyFooter from './Components/MyFooter';
import MyJumbotron from './Components/MyJumbotron';
import LatestRelease from "./Components/LatestRelease";
import DropDown from './Components/DropDown';




class App extends React.Component {
  render(){
    return (
      <>
      <div className="App">
        <MyNav title='Book'/>
       
        <MyJumbotron title='Book' tagline=" Books you can’t resist"/>
        <DropDown/>
        <LatestRelease/>
        <MyFooter info='CLOSED'/>
      </div>
      </>
    )
  }
  
}

export default App;
