import React from 'react';
//import moment from 'moment';
//import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

class FriendsList extends React.Component {
  state = {
    getFriends: [],
    postFriends: {
        name: null,
        age: null,
        email: null
      }
  };

  componentDidMount() {
    this.getData();
    //this.postData();
  }

  getData = () => {
    axiosWithAuth().get('http://localhost:5000/api/friends')
      .then(res => {
          console.log('GET from FrindsList', res.data)
        this.setState({
          getFriends: res.data
        });
      })
      .catch(err => console.log(err.response));
  };

  postData = e => {
    //e.preventDefault();
    axiosWithAuth().post('http://localhost:5000/api/friends', this.state.postFriends)
      .then(res => {
        this.setState({
            postFriends: res.data
          });
        console.log('POST from postData',res)
        
      })
      .catch(err => console.log(err.response));
  };

  handleChange = e => {
    this.setState({
      postFriends: {
        ...this.state.postFriends,
        [e.target.name]: e.target.value
      }
    });
  };


  render() {
    return (
        <div>
          {this.state.getFriends.length > 0 ? this.state.getFriends.map(n => 
          <>
                <p>Name:{n.name}</p>
                <p>Age:{n.age}</p>
                <p>Email:{n.email}</p>
          </>
            ): null}
        
        <form onSubmit={this.postData}>
          <input
            type="text"
            name="name"
            placeholder='Name'
            value={this.state.postFriends.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            placeholder='Age'
            value={this.state.postFriends.age}
            onChange={this.handleChange}
          />
           <input
            type="text"
            name="email"
            placeholder='Email'
            value={this.state.postFriends.email}
            onChange={this.handleChange}
          />
          <button>Add a Friend</button>
        </form>
        </div>
      )
    
  }
}

export default FriendsList;
