import React from 'react'
import './footer.css'
import Footer_Logo from '../photo/footer-logo.svg'

function footer() {
    return (
        <div className="footer">
            <img className="img" src={Footer_Logo} with="300" heigh="200" alt="第二張圖片"/>
            <div className="copyright">Copyright © 2021 長庚大學. All rights reserved.</div>
        </div>
    )
}

export default footer
