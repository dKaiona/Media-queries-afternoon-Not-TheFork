import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state ={
      showMenu: false
    }
  }

  onClick = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
  render() {
    return (
      <div className="App">

       <nav className= 'navbar'>
       <div className='title'>Start BootStrap</div>
       <div className='links-menu'>
         <span>Services</span>
         <span>Portfolio</span>
         <span>About</span>
         <span>Team</span>
         <span>Contact</span>
       </div>
       <button 
       onClick = {this.onClick}
       className='menu'>&#9776;</button>
       </nav>
      <div className = {this.state.showMenu ? 'drop-menu push-menu-left' : 'drop-menu'}>

      <div className='push-menu-left'>
      <span>Services</span>
         <span>Portfolio</span>
         <span>About</span>
         <span>Team</span>
         <span>Contact</span>
      </div>

      </div>
      
      <section className='push-center'>
      <div className='home-text'>

        <p className='home-text-h3'>Welcome To Our Studio!</p>
        <p className='home-text-h1'>It's Nice to</p>
        <p className='home-text-h1'>Meet You</p>
        <button className='home-button'>Tell Me More</button>
      </div>
      </section>
      <br></br>
      <br></br>
      <div className = 'white-box'>
      </div>

      </div>
    );
  }
}

export default App;
