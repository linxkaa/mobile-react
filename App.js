import React, {Component} from 'react';
import {View} from 'react-native';
import Header from './src/components/common/Header';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyDhcc78FI3_ooX_K0Pp2ZBZnCiE9xNI4vY',
      authDomain: 'latauth-1f9e5.firebaseapp.com',
      databaseURL: 'https://latauth-1f9e5.firebaseio.com',
      projectId: 'latauth-1f9e5',
      storageBucket: 'latauth-1f9e5.appspot.com',
      messagingSenderId: '71346235259',
      appId: '1:71346235259:web:e7ae007767cf208067bfde',
      measurementId: 'G-SWDWH4W1VP',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
