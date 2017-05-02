import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron'

export default class App extends React.Component{
    render() {
     return <Jumbotron className="-fluid text-lg-center" style={{
    backgroundImage:'url(img/forest-1198698_1280.jpg)', color:'white'}}>
                <h1>Building React.js User Interfaces</h1>
                <p>with Bootstrap and SASS.</p>
                <p><Button className="-primary" href="http://02geek.com" target="_blank" />
                <Button className="-outline-danger -sm" /></p>
                <Button className="-outline-primary -lg -block" disabled />
            </Jumbotron>;
    }
}