import React, { Component } from "react";

export default function Product(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.img} alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.company}</p>
                <div className="flex">
                    <a href="#" className="btn btn-primary">
                        {props.price}$
                    </a>
                    <a href="#" className="btn btn-primary">
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
