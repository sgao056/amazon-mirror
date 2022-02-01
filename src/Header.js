import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {auth} from './firebase';

function Header() {
    const [{basket, user},dispatch] = useStateValue();
    const handleAuthentication = ()=>{
        if (user){
            auth.signOut();
        }
    }
    return (
        <div className = "Header">
           <Link to="/">
           <img className = "Header_logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
           </Link>
           <div className = "Header_search">
               <input className="Header_searchInput" type = "text"/>
               <SearchIcon className="Header_searchIcon"/>
           </div>

           <div className = "Header_nav">
            <Link to = {!user && '/login'}>
                <div className = "Header_option" onClick={handleAuthentication}>
                    <span className = "Header_option1">
                        Hello {! user ? 'Guest':user.email}
                    </span>
                    <span className = "Header_option2">
                       {user ? 'Sign out' : 'Sign in'}
                    </span>
                </div>
            </Link>
                <div className = "Header_option">
                    <span className = "Header_option1">
                        Returns
                    </span>
                    <span className = "Header_option2">
                        & Orders
                    </span>
                </div>
                <div className = "Header_option">
                    <span className = "Header_option1">
                        Your
                    </span>
                    <span className = "Header_option2">
                        Prime
                    </span>
               </div>
                <Link to="/checkout">
                    <div className = "Header_optionBasket">
                        <ShoppingBasketIcon className="Header_optionBasket"/>
                        &nbsp;
                        <span className="header_option2 header_basketCount">
                        {basket.length}
                        </span> 
                        &nbsp;
                    </div>
                </Link>
           </div>
        </div>
        
    )
}

export default Header
