import React from 'react'
import {Route} from 'react-router-dom'
import Home from './pages/Home.js';
import About from './pages/About.js';
import Users from './pages/Users.js';
import Footer from './footer.js'
import "./content.css"

export default function Content (){
    
    return (
        <div className="content">
            <Route path="/TPLCweb" exact component={Home} />
            <Route path="/TPLCweb/about" component={About} />
            <Route path="/TPLCweb/users" component={Users} />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </div>
    )
}
