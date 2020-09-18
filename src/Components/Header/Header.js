import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../../App";
import * as firebase from "firebase/app";
import firebaseConfig from "../Login/firebaseConfig";
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const logout = () => {
        firebase.auth().signOut()
            .then(res => {
                console.log(res);

                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: ''
                }
                setLoggedInUser(signedOutUser);
            }).catch(err => {
            console.log(err);
        });
    }

    return (
        <>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-transparent border-bottom shadow-sm">
                <Link to="/">
                    <img className="my-0 mr-md-auto" src={"./Logo.png"} alt="travel guru" style={{width: "10%"}}/>
                </Link>

                <nav className="my-2 my-md-0 mr-md-3">
                    <Link className="p-2 text-white" to="/news">News</Link>
                    <Link className="p-2 text-white" to="/destination">Destination</Link>
                    <Link className="p-2 text-white" to="/blog">Blog</Link>
                    <Link className="p-2 text-white" to="/contact">Contact</Link>
                </nav>
                {
                    loggedInUser.email && <button className="btn btn-outline-primary" onClick={() => logout()}>Logout</button>
                }

                {
                    !loggedInUser.email && <Link className="btn btn-outline-primary" to="/login">Login</Link>
                }

            </div>
        </>
    );
};

export default Header;
