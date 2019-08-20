import React from 'react';
//import moment from 'moment';
//import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

class FriendsList extends React.Component {
  state = {
    getFriends: []
  };

  componentDidMount() {
    this.getData();
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
        </div>
      )
    
  }
}

export default FriendsList;
