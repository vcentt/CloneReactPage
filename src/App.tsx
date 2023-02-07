import React from 'react';
import logo from './logo192.png';
import './App.css';
import { ComponentAside } from './components/aside';
import { ComponentMain } from './components/main';
import MyButton from './components/boostrapbuttom';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header id='header' className='containerHeader row'>
        <div className='col-12'>
          <img className='App-logo' src={logo} alt="logo" />
          <p className='header-text'>React Labs</p>
        </div>
      </header>

      <div className="container row">
        <aside className= "col-2">
            <ComponentAside />
          </aside>

        <main className="App-main col-8">
          <div className="text-center">
            <h1>React Labs: What We've Been <br></br> Working On – June 2022</h1>
          </div>
          <ComponentMain />
          <MyButton />
        </main>
      </div>
    </div>
  );
}

export default App;
