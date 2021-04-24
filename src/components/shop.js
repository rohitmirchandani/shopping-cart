import React, { Component } from 'react';
import './shop.css'



const modify= (string)=>{
    return string
      .split("-")
      .map((s) => {
        return s[0].toUpperCase() + s.substring(1);
      })
      .join(" ");
  };

class Shop extends Component{
    constructor(props){
        super(props);
        
    }


    render(){
        return (
            <div id='shop'>
                {
                    this.props.items.map((item)=>{
                        return (
                            <div className='item'>
                                <img src={item.src}/>
                                <div className='without-img'>
                                    <div className='item-info-div'>
                                        <p id='item-name'>{modify(item.name)}</p>
                                        <p id='item-price'>${item.price}</p>
                                    </div>
                                    <div className='change-cart-div'>
                                        <button onClick={()=>{this.props.onChange(item.name,-1)}}>-</button>
                                        <p id='item-added'>{this.props.cart[item.name]}</p>
                                        <button onClick={()=>{this.props.onChange(item.name,1)}}>+</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Shop;