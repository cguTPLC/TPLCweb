import './bar.css'
import React from 'react'
import CGU_Logo from '../photo/CGU_Logo.png'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'

export default function bar() {
  return (
    <div className="bar">
      <span className="animate-box"></span>
      <div>
        <div className="logo">
          <a href="https://cgutplc.github.io/TPLCweb/">
            <img src={CGU_Logo} width="200" height="50" alt="第一張圖片"/>
          </a>
          <div className="logo-title"><b>|</b>台灣詩•鄉土情</div>
        </div>
        <Router>
          <div>
            <nav>
                <ul classNmae='Header_navbar'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={Index} />
            <Route path="/about"  component={About} />
            <Route path="/users"  component={Users} />
              
          </div>
        </Router>
      </div>
    </div>
  );
}


const Index = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>