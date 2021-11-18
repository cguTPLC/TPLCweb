import React from 'react'
import img1 from './photo/109管八.png'
import img2 from './photo/109志清湖.png'
import img3 from './photo/109青蛙湖.png'
import './Page.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Page109 = () => {
    return (
        <div className='row'>
            <div className='col-6 m-3 ca'>
                <img src={img1} width='400' height='250' ></img>
            </div>
            <div className='col-6 m-3 ca'>
                <img src={img2} width='400' height='250' ></img>
            </div>
            <div className='col-6 m-3 ca'>
                <img src={img3} width='400' height='250' ></img>
            </div>
            <a href="https://drive.google.com/drive/folders/1DmWfHRwIH2QwrC_ngmXjLNqRwZZBtGfk?usp=sharing">109下載</a>
        </div>
    )
}

export default Page109
