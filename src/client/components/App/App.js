import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import HelloWorld from '../HelloWorld';
import './App.css';

class App extends Component {
	render () {
		return (
			<div>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<span>HelloWorld</span>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav navbar>
							<NavItem>Time</NavItem>
							<NavItem>Counter</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Grid>
					<HelloWorld />
				</Grid>	
			</div>
		)
	}
}

export default App;