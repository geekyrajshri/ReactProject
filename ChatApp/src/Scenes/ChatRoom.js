import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import { TextField, FlatButton } from 'material-ui';
import {GridList, GridTile} from 'material-ui/GridList';
// import { sendMessage } from '../actions';
import {Bar} from '../Bar.js';

export class ChatRoom extends Component{

  state={
  	message:'',
  	username:'You'
  }

  static defaultProps={
  	users:[],
  	messages:[],
  }
    
  handleInputChange(){
         const text = document.getElementById('messageButton').value;
         // console.log(this.state.message)
     this.setState({message:text,username:this.state.username})
   }
  handleSendMessage(){																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																	
   // console.log(this.state.message)
   this.props.onNewMessage(this.state)
   this.setState({message:''})

  }

componentWillReceiveProps(props) {
	console.log(props);
}


	render() {
		const users=this.props.users;
		// console.log(this.props.users)
		const messages=this.props.messages;
     // console.log(this.props.messages)


		return (
			<div>
			<div style={{display:'flex'}}>
			 <List style={{width:'30%',backgroundColor:'#f3f3f3'}} >
         
            { users.map((user, i) =>
              <ListItem primaryText={users[i].username} key={i} />
            )}
          </List>
          <List style={{width:'100%'}}>
            {messages.map((message, i) =>
              <ListItem primaryText={messages[i].message} key={i} secondaryText={messages[i].username} />
            )}
          </List>
          </div>
             <div style={{marginBottom:'30px',marginLeft:'25%',display: 'flex' }}>
                <div style={{ flex: 1 }}>
                  <TextField fullWidth={true} id="messageButton" hintText="Message" value={this.state.message} onChange={this.handleInputChange.bind(this )}
                   />
                </div>
                <div style={{ width: '80px' }}>
                  <FlatButton label="Send" onClick={this.handleSendMessage.bind(this)} />
                </div>
              </div>
           


			</div>
		);
	}
}