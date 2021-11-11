import React from 'react'
import './Home.css'
import Slideshow from './Home/Slideshow.js'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return(
    <>
        <h1>「臺灣詩•鄉土情」課程</h1>
        <h1>長庚八景詩及教學影像數位化資料庫</h1>
        <div className='introduce container'>
            <div className='left'>
                <div className='poetry'>
                    <p>承襲古典精神，將長庚寫入傳統。</p>
                    <p>描繪校園景致，讓學子悠遊詩情。</p>
                </div>
                <div className='about'>
                    <p>希望藉由</p>
                    <p>一首首校園景緻的詩篇，重拾校園生活的青春印記</p>
                    <p>一堂堂課業學習的身影，重溫努力耕耘的課堂趣味</p>
                    <p>共同建置長庚人的溫馨與榮光</p>
                </div>
            </div>
            <Slideshow/>
        </div>
    </>
    )
}
export default Home;
/*
{data.map(data => 
    <div>
        {data.name}他{data.age}歲 廉價大學生做網頁 <b>error404</b>
        <b>error404</b>
        <b>error404</b>
        <b>error404</b>
        <b>error404</b>
        <b>error404</b>
        <b>error404</b>
    </div>
    )}
const data = [
    {
        name: "翁旻醇",
        age: "20"
    },
]
*/