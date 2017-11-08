import React, { Component} from 'react';
// import { connect } from 'react-redux';
import { TextField, RaisedButton } from 'material-ui';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
// import { login } from '../actions';
import {NavLink} from 'react-router-dom';


export class Welcome extends Component{
 
    state={
  	username:''
  }


  handleUserNameChange(){
  	const value=document.getElementById('username').value;
    if(value!=null && value.length>0){
  	this.setState({username:value});}

  }

  handleAddNewUser(){
  	// console.log(this.state)
    if(this.state.username!=''){
  	this.props.username(this.state);
  	this.setState({username:''})
}
  }

	render() {
		return (
			<div style={{textAlign:'center',height:'100% !important'}} >
				 
		<Card >
            <CardTitle
              title="Welcome to ChatApp"
            />
            <CardText >
              To start chat, please choose a name for the Chat room.
              <br/>
              <TextField
                id="username"
                hintText="Tom, Jerry, ..."
                floatingLabelText="Display Name"
                value={this.state.username}
                onChange={this.handleUserNameChange.bind(this)}
              />
            </CardText>
            <CardActions>
              <RaisedButton label="Start" primary={true} onClick={this.handleAddNewUser.bind(this)}> 
              </RaisedButton >
            </CardActions>
          </Card>
        
			</div>
		);
	}
}