import React from 'react'
import { useState } from 'react';
import './Users.css'
import Page109 from './Users/Page109'
import Page108 from './Users/Page108'
import Page107 from './Users/Page107'
import Page106 from './Users/Page106'
import Page105 from './Users/Page105'
import Page104 from './Users/Page104'
import Page103 from './Users/Page103'
import Page102 from './Users/Page102'


function Users() {
    const [year, setYear] = useState('109');
    return (
        <>
            <div className='collection-content'>
                <ul className='left-table'>
                    <li className='red'    onClick={() => setYear('109')}><div>109</div></li>
                    <li className='orange' onClick={() => setYear('108')}><div>108</div></li>
                    <li className='yellow' onClick={() => setYear('107')}><div>107</div></li>
                    <li className='green'  onClick={() => setYear('106')}><div>106</div></li>
                    <li className='blue'   onClick={() => setYear('105')}><div>105</div></li>
                    <li className='indigo' onClick={() => setYear('104')}><div>104</div></li>
                    <li className='purple' onClick={() => setYear('103')}><div>103</div></li>
                    <li className='red'    onClick={() => setYear('102')}><div>102</div></li>
                </ul>
                <div className='downloadSheet container'>
                {(() => {
                switch (year) {
                    case '109':
                        return <Page109/>
                    case '108':
                        return <Page108/>
                    case '107':
                        return <Page107/>
                    case '106':
                        return <Page106/>
                    case '105':
                        return <Page105/>
                    case '104':
                        return <Page104/>
                    case '103':
                        return <Page103/>
                    case '102':
                        return <Page102/>
                }})()}
                </div>
            </div>
        </>
    )
}

export default Users;