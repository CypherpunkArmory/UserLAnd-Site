import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Logo from '../../components/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Nav extends Component {
	render() {
		return (
			<nav className='navbar navbar-expand-lg pt-3 position-absolute w-100'>
				<div className='container'>
					<Link className='navbar-brand' to='/'><Logo /></Link>
					<ul className='flex-row navbar-nav ml-auto'>
						<li className='nav-item mr-3'><Link className='nav-link' to='/jobs'>Jobs</Link></li>
						<li className='nav-item mr-3'><a className='nav-link' href='https://github.com/CypherpunkArmory/UserLAnd/issues'>Support</a></li>
						<li className='nav-item'><a className='nav-link' href='https://github.com/CypherpunkArmory/UserLAnd'><FontAwesomeIcon icon={['fab', 'github']} size='lg' /></a></li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Nav;