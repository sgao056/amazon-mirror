import React, {useState} from 'react';
import './Login.css';
import {Link, useHistory} from "react-router-dom";
import {auth} from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const signIn = e =>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth =>{
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const regist = e =>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
               
                if (auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className = "login">
            <Link to = '/'>
                <img
                className='login_logo' 
                src='https://cdn2.downdetector.com/static/uploads/logo/amazon.png' 
                />
            </Link>
            <div className='login_container'>
                <h1>Sign in</h1>
                <form>
                    
                    <h5>E-mail</h5>
                    <input className='text' type='text' value={email} onChange = {e => (setEmail(e.target.value))} />
                    <h5>Password</h5>
                    <input className='text' type='password' value={password} onChange = {e => (setPassword(e.target.value))} />

                    <button type = 'submit' onClick={signIn} className='login_signInButton'>Sign in</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                            
                <button type = 'submit' onClick={regist} className='login_registerButton'>Create your Amazon account</button>
                
            </div>
        </div>
    )
}

export default Login
