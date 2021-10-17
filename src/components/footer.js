import React from 'react'
import './footer.css'
import Footer_Logo from '../photo/footer-logo.svg'
import Github from '../photo/github.png'

function footer() {
    return (
        <div className="footer">
            <img className="img" src={Footer_Logo} width="300" height="50" alt="第二張圖片"/>
            <a href="https://github.com/Weng-B0829022"><img className="github" src={Github} width="30" height="30" alt="author"/></a>
            <div className="copyright">Copyright © 2021 長庚大學. All rights reserved.</div>
        </div>
    )
}

export default footer
