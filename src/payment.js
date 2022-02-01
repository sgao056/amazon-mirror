import React from 'react'
import './payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import {Link, useHistory} from 'react-router-dom'
import{ CardElement,useStripe, useElements } from"@stripe/react-stripe-js"
import CurrencyFormat from 'react-currency-format';
import {useState, useEffect} from 'react'
import {getBasketTotal} from './reducer'
import axios from './axios';
import { db } from "./firebase";

function Payment() {
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    const[{basket,user},dispatch] = useStateValue();
    const[error,setError] = useState(null);
    const[disabled,setDisabled] = useState(true);
    const[succeeded,setSucceeded] = useState(false);
    const[processing,setProcessing] = useState("");
    const[clientSecret,setClientSecret]=useState(true);
        useEffect(() => {
                const getClientSecret = async () =>
                {
                    const response = await axios({
                        method:'post',
                        url:`/payments/create?total=${getBasketTotal(basket)}`
                    });
                    setClientSecret(response.data.clientSecret)
                }
                getClientSecret();
            }, [basket])
    const handleSubmit = async(event) =>{
        event.preventDefault();
        setProcessing(true);    

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })

    }
    
    const handleChange = event =>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message:"");
    }
    return (
        <div className='payment'>
            <div className='payment_container'>
               <h1>
                   Checkout(
                       <Link to="/checkout">{basket?.length} items</Link>
                   )
               </h1>
               <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div>
                        <p>{user?.email}</p>
                        <h5>Room ***, Ave.***,</h5>
                        <h5>**City, ON, CA</h5>

                    </div>
               </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment_items'>
                    {basket.map(item=>
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                        )}
                    </div>
               </div>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment method</h3>
                    </div>
                    <div className='payment_details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment_prceContainer">
                            <CurrencyFormat
                                renderText={(value)=>(
                                    <>
                                        <p>
                                            Subtotal({basket.length} items):
                                            <strong>{value}</strong>
                                        </p>
                                        <small className="subtotal_gift">
                                            <input type = "checkbox" />This order contains a gift
                                        </small>
                                    </>
                                )}
                                decimalScale = {2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"CDN$"}
                            />
                            <button disabled={processing||disabled||succeeded}>
                                <span>
                                    {processing ? <p>Processing</p>:"Buy now"}
                                </span>
                            </button>
                            </div>
                            {error&&<div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
