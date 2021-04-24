import React, { Component } from 'react';
import logo from '../images/logo.png'
import a from '../images/sneaker-wallpaper-1.jpg'
import b from '../images/sneaker-wallpaper-2.jpg'
import c from '../images/sneaker-wallpaper-3.jpg'
import d from '../images/sneaker-wallpaper-4.jpg'
import './home.css'


const wallpapers = [a,b,c,d]
class Home extends Component{
    constructor(props){
        super(props);
        this.state={i:0}
    }
    componentDidMount(){
        this.setState({i:0});
    }
    componentDidUpdate(){
        setTimeout(()=>{
            this.setState((prev)=>{
                let ni = (prev.i+1)%4;
                return {i:ni}
            })
        },5000)

    }
    render(){
        return (
            <div id='home' style ={{backgroundImage:'url('+ wallpapers[this.state.i]+')'}} >
                <p id='gyan'>A website that let you imagine that you are buying some of the authentic classic sneakers of all time.</p>
                <div></div>
            </div>
        )
    }
}


export default Home;