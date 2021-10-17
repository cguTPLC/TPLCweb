import './bar.css'
import React from 'react'
import CGU_Logo from '../photo/CGU_Logo.png'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'

const style = {
  textDecoration: 'none',
};

export default function bar() {
  return (
    <div className="shadow">
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
                <ul classNmae='Header_navbar' >
                    <li>
                        <div className="button">
                          <div className="circle"></div>
                          <a href="/" style={style}>Home</a>
                        </div>
                    </li>
                    <li>
                        <div className="button">
                          <div className="circle"></div>
                          <a href="/about" style={style}>About</a>
                        </div>
                    </li>
                    <li>
                        <div className="button">
                          <div className="circle"></div>
                          <a href="/users" style={style}>Users</a>
                        </div>
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