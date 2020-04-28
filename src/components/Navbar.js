import React, { Component } from 'react';
import logo from '../logo.png';
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
	render() {
		return (
			<nav className='navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5'>
				<Link to='/'>
					<img src={logo} width='50px' alt='logo' className='navbar-brand' />
				</Link>
				<ul className='navbar-nav align-items-center'>
					<li className='nav-item ml-5'>
					<Link to='/' className='nav-link'>
						Product
					</Link>
					</li>
				</ul>
				<Link to='/cart' className='ml-auto' >
					<button>
						<i className='fas fa-cart-plus' />
					</button>
				</Link>
			</nav>
		)
	}
}