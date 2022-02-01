import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./checkout";
import Login from './Login';
import { auth } from './firebase';
import {useStateValue} from './StateProvider';
import Payment from "./payment";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe("pk_test_51I0ULCE7iHYykK3PLLk5inhqLUTMSFfSj0rfFNKAae8kDzJ5eO1qVAXV0SGPitbDfPX7EnU52Mzl2TupRvtToffa00PoO3UN0O");

function App() {
  const [{},dispatch] = useStateValue()  
  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {

      if(authUser){

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  
  return (
    <Router>
      <div className="app">
          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment/>
              </Elements>
            </Route>
            <Route path="/">
              <Header />  
              <Body />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
