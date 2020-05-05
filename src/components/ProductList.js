import React, { Component } from "react";
import Product from "./Product";
import Title from "./title";
import { StoreProducts } from "../data";

let state = {
    products: [],
};

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        {StoreProducts.map((obj) => {
                            return (
                                <Product
                                    title={obj.title}
                                    img={obj.img}
                                    company={obj.company}
                                    price={obj.price}
                                />
                            );
                        })}
                        <div className="row"></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
