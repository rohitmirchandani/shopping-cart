import React, { Component } from 'react';
import './cart.css'


const modify= (string)=>{
    return string
      .split("-")
      .map((s) => {
        return s[0].toUpperCase() + s.substring(1);
      })
      .join(" ");
  };
  
class Cart extends Component{
    constructor(props){
        super(props);
        this.total = 0;
    }
    render(){
        return (
            <div id='cart'>
                <div id='items-in-cart'>
                  {
                      this.props.items.map((item)=>{
                          if(this.props.cart[item.name]!==0){
                              this.total += this.props.cart[item.name]*item.price;
                              return( 
                              <div className='item'>
                                <img src={item.src}/>
                                <div className='without-img'>
                                    <div className='item-info-div'>
                                        <p>{modify(item.name)}</p>
                                        <p>${item.price}</p>
                                    </div>
                                    <div className='change-cart-div'>
                                        <button onClick={()=>{this.props.onChange(item.name,-1)}}>-</button>
                                        <p>{this.props.cart[item.name]}</p>
                                        <button onClick={()=>{this.props.onChange(item.name,1)}}>+</button>
                                    </div>
                                    
                                    <p class='total'>${item.price*this.props.cart[item.name]}</p>
                                    <button class='delete' onClick = {()=>{this.props.onDelete(item)}}>Delete</button>
                                </div>
                              </div>
                              )
                          }
                      })
                  }  
                </div>
                  <div id='bill'>
                    <p>Amount : <b>${this.total}</b></p>
                    <p>GST : <b>18%</b></p>
                    <p>Delivery Charges : <b>2%</b></p>
                    <p className='total-payable'>Total Payable : <b>${(this.total + 0.18*this.total + 0.02*this.total).toFixed(2)}</b></p>
                    <button className='checkout'>Checkout</button>
                  </div>
            </div>
        )
    }
}

export default Cart;