import React, {useContext } from 'react';
import './Login.css';
import firebaseConfig from "./firebaseConfig";
import * as firebase from "firebase/app";
import {UserContext} from "../../App";
import { useHistory, useLocation } from 'react-router-dom';
import "firebase/auth";

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    let newUser = false;

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleEmailLogin = () => {
        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res);
                const newUserInfo =  {
                    isSignedIn: true,
                    displayName: res.user.displayName,
                    email: res.user.email
                };

                handleResponse(res, true);
            })
            .catch(function(error) {
                // const newUserInfo = {};
                // setLoggedInUser(newUserInfo);
                console.log(error);
                //show server error
            });
    }

    const registerUser = () => {

        let name = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        //validation error for fields
        if(email =="" || password ==""){
            alert('Email/Password is empty');
            return false;
        }

        //confirm password
        if(password != confirmPassword){
            alert('Password Mismatch');
            return false;
        }

        //update display name using form data

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( res => {
                const newUserInfo =  {
                    isSignedIn: true,
                    name: name,
                    email: res.user.email
                };

                updateUserName(name, res);

            })
            .catch( error => {
                //show already exist validation error
            });
    }

    const toggleForm = () => {

        if(!newUser){
            newUser = true;
            document.getElementById("registrationForm").style.display = 'block';
            document.getElementById("loginForm").style.display = 'none';
        }else{
            newUser = false;
            document.getElementById("loginForm").style.display = 'block';
            document.getElementById("registrationForm").style.display = 'none';
        }
    }

    const googleLogin = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                handleResponse(res, true);
            })
            .catch(error => {

            })
    }

    const facebookLogin = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            handleResponse(result, true);

        }).catch(error => {
            //need to handle error
        });
    }

    const handleResponse = (res, redirect) =>{
        const {displayName, email} = res.user;

        const userInfo = {
            isSignedIn: true,
            name: displayName,
            email: email
        };
        setLoggedInUser(userInfo);

        if(redirect){
            history.replace(from);
        }

    }

    const updateUserName = (name, res) =>{
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function() {
            handleResponse(res, true);

        }).catch(function(error) {
            console.log(error)
        });
    }

    return (
        <div id="loginPage">
               <form className="form-signin" id="loginForm">
                   <div className="form-group">
                       <label htmlFor="exampleInputEmail1">Email address</label>
                       <input type="email" className="form-control" id="loginEmail"/>
                   </div>
                   <div className="form-group">
                       <label htmlFor="exampleInputPassword1">Password</label>
                       <input type="password" className="form-control" id="loginPassword"/>
                   </div>

                   <button type="button" className="btn btn-primary" onClick={() => handleEmailLogin()}>Login</button>
                   <br/>
                   Don’t have an account? <button type="button"  onClick={() => toggleForm() }>Create an account</button>
                   <hr/>
               </form>

                <form className="form-signin" id="registrationForm" style={{display:"none"}}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">First Name</label>
                        <input type="text" className="form-control" id="firstName"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Last Name</label>
                        <input type="text" className="form-control" id="lastName"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username or Email</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword2">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword"/>
                    </div>

                    <button type="button" className="btn btn-primary" onClick={() => registerUser()}>Submit</button>
                    <br/>
                    Already have an account? <button type="button"  onClick={() => toggleForm()}>Login</button>
                    <hr/>
                </form>

            <div className="text-center">
                <span>Or</span>
                <br/>
                <button className="social-login-btn" onClick={() => googleLogin() }>
                    <img src={"/Icon/google.png"} alt=""/>
                    Continue with Google</button>
                &nbsp;
                <button className="social-login-btn" onClick={() => facebookLogin() }>
                    <img src={"/Icon/fb.png"} alt=""/>
                    Continue with Facebook
                </button>
            </div>
        </div>
    );
};

export default Login;
