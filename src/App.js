import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//components
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer';

//pages
import HomePage from './Pages/Homepage/HomePage';
import Aboutpage from './Pages/Aboutpage/Aboutpage';

import ErrorPage from './Pages/ErrorPage/ErrorPage';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import Products from './Pages/Products/Products';



function App() {
  return (<>
            <NavBar />
            <Router>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/about">
                  <Aboutpage />
                </Route>
                <Route exact path="/products">
                  <Products />
                </Route>
                <Route exact path="/single">
                  <SingleProduct />
                </Route>
                <Route exact path='/products/:id' children={<SingleProduct />} />
                <Route path="*">
                  <ErrorPage />
                </Route>
              </Switch>
            </Router>
            <Footer />
    </>
  )
}

export default App;
