import React from 'react'
import { useState } from 'react';
import './About.css'

function About() {
    const [year, setYear] = useState('110');

    return (
        <>
            <ul className='left-table'>
                <li className='red'    onClick={() => setYear('109')}>109</li>
                <li className='orange' onClick={() => setYear('108')}>108</li>
                <li className='yellow' onClick={() => setYear('107')}>107</li>
                <li className='green'  onClick={() => setYear('106')}>106</li>
                <li className='blue'   onClick={() => setYear('105')}>105</li>
                <li className='indigo' onClick={() => setYear('104')}>104</li>
                <li className='purple' onClick={() => setYear('103')}>103</li>
                <li className='red'    onClick={() => setYear('102')}>102</li>
            </ul>
            {(() => {
            switch (year) {
                case '109':
                    return <a href="https://drive.google.com/drive/folders/1DmWfHRwIH2QwrC_ngmXjLNqRwZZBtGfk?usp=sharing">109下載</a>
                case '108':
                    return <a href="https://drive.google.com/drive/folders/1RmmX4xXE_EUHndItfxmy3lcIMj9tMtJg?usp=sharing">108下載</a>
                case '107':
                    return <a href="https://drive.google.com/drive/folders/1J-Ia11Xm7tnhuueR7RWYQ8dmEvmmcSKr?usp=sharing">107下載</a>
                case '106':
                    return <a href="https://drive.google.com/drive/folders/1CLNcw1NFw7FSHb-BJQVLgUzDp9NG_-cX?usp=sharing">106下載</a>
                case '105':
                    return <a href="https://drive.google.com/drive/folders/1KJqQOsNUj7Da6K3wmk2rN1l6DX5vEkuu?usp=sharing">105下載</a>
                case '104':
                    return <a href="https://drive.google.com/drive/folders/1wKwq-2po7Sr5_crHSvxcgITwnmO4RxiP?usp=sharing">104下載</a>
                case '103':
                    return <a href="https://drive.google.com/drive/folders/1DOz8VtFmZbXEJIRmCN0ph3hTd0FtgaOE?usp=sharing">103下載</a>
                case '102':
                    return <a href="https://drive.google.com/drive/folders/1VtRy-BTHqLwYyDhMBMib-7hq7iF8AIvS?usp=sharing">102下載</a>
                default:
                    return <button>null</button>
            }})()}

        </>
    )
}

export default About;


{/* <ul>
<ul className='right-table'>
<li><a href="https://drive.google.com/uc?id=1mJVdUrPXqpjrvRTsK-Nwsl2fxabNnMDL&authuser=1&export=download">第一組下載</a></li>
<li><a href="https://drive.google.com/uc?id=1Acjny5Aj_2cKEB31S_0_m3_BSQcBdZm-&authuser=1&export=download">第二組下載</a></li>
<li><a href="https://drive.google.com/uc?id=1l-Tjr0Z8mevVhwNtt-MOr1MmwV9Gd7OB&authuser=1&export=download">第三組下載</a></li>
<li><a href="https://drive.google.com/uc?id=1bFMwXx7CXg7J8njGCD_2fNBHWdeIKmY_&authuser=1&export=download">第四組下載</a></li>
<li><a href="https://drive.google.com/uc?id=1s2x9cYymVlSq9meJ1taS2a_xwXVqa0cd&authuser=1&export=download">第五組下載</a></li>
<li><a href="https://drive.google.com/uc?id=16r_jbGtAglKdiFYeSV7VUKuCVQwa6gQk&authuser=1&export=download">第六組下載</a></li>
<li><a href="https://drive.google.com/uc?id=1PNre12vPmAAUGkh0Zbzp4EK39EOHxYLo&authuser=1&export=download">第七組下載</a></li>
<li><a href="https://drive.google.com/uc?id=1Cwga3qoJJV5mQo4W53f7VQLssz-dC7n0&authuser=1&export=download">第八組下載</a></li>
</ul> */}