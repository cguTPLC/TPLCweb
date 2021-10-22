import './bar.css'
import React from 'react'
import CGU_Logo from '../photo/CGU_Logo.png'
import {Link} from 'react-router-dom'

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
          <div>
            <nav>
                <ul className="Header_navbar">
                    <li>
                        <div className="button">
                          <div className="circle"></div>
                          <Link 
                          to="/TPLCweb"
                          style={style}
                          activeClassName="active"
                          >首頁</Link>
                        </div>
                    </li>
                    <li>
                        <div className="button">
                          <div className="circle"></div>
                          <Link 
                          to="/TPLCweb/about" 
                          style={style}
                          activeClassName="active"
                          >作品欣賞</Link>
                        </div>
                    </li>
                    <li>
                        <div className="button">
                          <div className="circle"></div>
                          <Link 
                          to="/TPLCweb/users" 
                          style={style}
                          activeClassName="active"
                          >生活影像</Link>
                        </div>
                    </li>
                </ul>
            </nav>


              
          </div>
      </div>
    </div>
  );
}
