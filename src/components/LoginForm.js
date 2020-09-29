import React, {Component} from 'react';
import {TextInput, View, Text} from 'react-native';

import {Button, CardSection, Card, Input} from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  onButtonPress = () => {
    const {email, password} = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(this.setState({error: 'Authentication Failed'}));
      });
  };
  render() {
    const styles = {
      errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
      },
    };
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="example@gmail.com"
            label="email"
            onChangeText={(email) => this.setState({email})}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="password"
            onChangeText={(password) => this.setState({password})}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

        <CardSection>
          <Button onPress={this.onButtonPress}>login</Button>
        </CardSection>
      </Card>
    );
  }
}
export default LoginForm;
