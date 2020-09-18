import React, {createContext, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Destination from "./Components/Destination/Destination";
import News from "./Components/News/News";
import Blog from "./Components/Blog/Blog";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Booking from "./Components/Booking/Booking";
import Header from "./Components/Header/Header";
import './App.css';
import BookingList from "./Components/BookingList/BookingList";

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Header/>
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>
                  <Route path="/news">
                      <News />
                  </Route>
                  <Route path="/destination">
                      <Destination />
                  </Route>
                  <Route path="/blog">
                      <Blog />
                  </Route>
                  <Route path="/contact">
                      <Contact />
                  </Route>

                  <Route path="/login">
                      <Login />
                  </Route>

                  <Route path="/booking">
                      <Booking />
                  </Route>

                  <Route path="/bookinglist">
                      <BookingList />
                  </Route>

                  {/*<PrivateRoute path="/bookinglist">*/}
                  {/*    <BookingList/>*/}
                  {/*</PrivateRoute>*/}

              </Switch>
          </Router>
      </UserContext.Provider>
  );
}

export default App;
