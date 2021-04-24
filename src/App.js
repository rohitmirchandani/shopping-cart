import './App.css';
import Home from './components/home'
import Shop from './components/shop'
import Cart from './components/cart';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Component } from 'react';
import a from './images/vans.jpg'
import r from './images/puma.jpg'
import b from './images/nike-air-force-1-07.jpg'
import c from './images/converse-chuck-taylor.jpg'
import d from './images/adidas-superstar.jpg'
import e from './images/new-balance.jpg'
import f from './images/balenciaga.jpg'
import g from './images/nike-cortez.jpg'
import h from './images/common-projects.jpg'
import logo from './images/logo.png'


const images =[a,r,b,c,d,e,f,g,h];
class Item{
  constructor(name,src,price){
    this.name = name;
    this.src = src;
    this.price = price;
  }
}
const names = ['vans','puma','nike-air-force-1-07','converse-chuck-taylor','adidas-superstar','new-balance','balenciaga','nike-cortez','common-projects']
const price=[49.99,59.99,89.99,79.99,99.99,119.99,179.99,239.99,499.99,]


class App extends Component{
constructor(){
  super();
  this.items =(()=>{
    let arr = [];
    for(let i in names){
      arr.push(new Item(names[i],images[i],price[i]));
    }
    return arr;
  })()
  this.state = {
    cart:(()=>{
      let obj = {};
      for(let item of this.items){
        obj[item.name] = 0;
      }
      return obj;
    })(),
    
  }
  this.changeCart = this.changeCart.bind(this);
  this.onDelete = this.onDelete.bind(this);
}
changeCart(name,change){
  if(!(this.state.cart[name]===0 && change===-1)){
  this.setState((pstate)=>{
    let obj = {...pstate.cart}
    obj[name] += change;
    return {cart:obj};
  })
}
}
onDelete(item){
  this.setState((prev)=>{
    let obj = {...prev.cart};
    obj[item.name] = 0;
    return {cart:obj};
  })
}
  render(){  
  return (
    <Router id='router'>
      <nav id='nav-div'>
      <p id='logo'><img id='nav-logo'src = {logo}/>SNEAKS</p>
          <ul id='nav-bar'>
          <li><img src="https://img.icons8.com/material-sharp/96/000000/home.png"/><Link to='/'>Home</Link></li>
          <li><img src="https://img.icons8.com/ios-filled/50/000000/sneakers.png"/><Link to={`/shop`}>Shop</Link></li>
          <li><img src="https://img.icons8.com/pastel-glyph/64/000000/fast-cart.png"/><Link to='/cart'>Cart</Link></li>
        </ul>
      </nav>
      <Route id='home-div' path='/' exact component={Home}/>
      <Route path = '/shop' component={()=><Shop onChange={this.changeCart} items ={this.items} cart ={this.state.cart}/>}/>
      <Route  path='/cart' component={()=><Cart onChange={this.changeCart} items={this.items} cart  = {this.state.cart} onDelete={this.onDelete}/>} />
    </Router>
  );
}
}

export default App;
