import React from 'react'
import {Route} from 'react-router-dom'


export default function Content (){
    return (
        <div className="content">
            <Route path="/TPLCweb" exact component={Index} />
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
        </div>
    )
}



const Index = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>