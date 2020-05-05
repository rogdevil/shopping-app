import React from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import Details from "./components/Details";

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ProductList} />
                <Route path="/cart" component={Cart} />
                <Route path="/details" component={Details} />
                <Route component={Default} />
            </Switch>
        </React.Fragment>
    );
}

export default App;

/*at ths point of thime it is great*/
