import React, { Component } from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./button";

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5">
                <Link to="/">
                    <img
                        src={logo}
                        width="50px"
                        alt="logo"
                        className="navbar-brand"
                    />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Product
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <input
                            placeholder="search"
                            className="input-box search-bar"
                        />
                        <a className="btn btn-dark">Search</a>
                    </li>
                </ul>

                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-3">
                            <i className="fas fa-cart-plus" />
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue) !important;
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: uppercase;
    }
`;
