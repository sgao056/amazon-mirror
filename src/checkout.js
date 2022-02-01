import React from 'react';
import "./checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./subtotal"
function Checkout() {
    const [{basket, user},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <div className="checkout_ad">
                    <img className="checkout_adImage"
                         src = "https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner2.jpg" 
                         alt=""/>
                </div>
                <div>
                    <h3>Hello,{user?.email}</h3>
                    <h2 className="checkout_title">
                    Your shopping basket
                    </h2>
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal className="subtotal"/>
            </div>
        </div>
    )
}

export default Checkout
