import './bar.css';
import React from 'react';
import CGU_Logo from '../photo/CGU_Logo.png'

export default function LabelBottomNavigation() {

  return (
    <div className="animate-bar">
      <span className="box"></span>
      <div className="logo">
        <a href="https://cgutplc.github.io">
          <img src={CGU_Logo} width="200" height="50" alt="第一張圖片"/>
        </a>
        <div className="logo-title"><b>|</b>台灣詩•鄉土情</div>
      </div>

    </div>
  );
}
