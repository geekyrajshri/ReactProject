import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar} from 'material-ui';


export class Bar extends Component{
	render() {
		return (
			<div>
        <AppBar
          title="ChatApp"
          iconElementRight={<img src={logo} className="App-logo" alt="logo" />}
       />

			</div>
		);
	}
}