import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Bar} from './Bar.js';
import {Welcome} from './Scenes/Welcome.js'
import {ChatRoom} from './Scenes/ChatRoom.js'
import {Router, Route}  from 'react-router-dom';
class App extends Component {


  state={
      myUserName:'',
      users:[{"username":"A"},{"username":"B"},{"username":"C"}],
      messages:[{"username":"A",message:"ipsum"},{"username":"B",message:"ipsum"}]
  }

  handleNewMessage=((message)=>{
// console.log('parent compo',message);

     this.setState({messages:[...this.state.messages,message]})
  })  

  handleAddNewUserName=((username)=>{
    this.setState({users:[...this.state.users,username]})
  })                                                            


  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className="App">
     
      <Bar/>
       <Welcome username={this.handleAddNewUserName}/>
       <ChatRoom users={this.state.users} messages={this.state.messages} onNewMessage={this.handleNewMessage}/>
       </div>
     </MuiThemeProvider>

    );
  }
}

export default App;
