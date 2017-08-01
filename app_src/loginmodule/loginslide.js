import React from 'react';
import {
  StyleSheet,
   Text,
    View,
    TextInput,
    Button,
    Alert,
    TouchableOpacity,
    Image

     } from 'react-native';

import styles from '../app_src/style/login'
import baseUrl from '../app_src/BaseUrl/BaseUrl'
import Profile from '../app_src/profile/profile'

import { NavigationActions } from 'react-navigation';

const homeScreen = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });

const BaseApi = baseUrl.getBaseApi()
const api={
    baseURL:BaseApi.baseURL,
    loginUrl:'/account/login/',
    signupUrl:'/account/create/',
    authKey:BaseApi.authKey
  }



export default class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        emailtext: '',
        pwdtext:'',
        isLoggedIn:false,
               };
    }
     _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  /* Email Validation */

  validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
	};

 /* Password Validation*/

  _login=()=>{

    const { dispatch } = this.props.navigation;

  	const { emailtext, pwdtext } = this.state

    this.setState({isLoggedIn:true})

  	if (!this.validateEmail(emailtext)) {
	  Alert.alert(" Email is not Valid !");
	} else if(pwdtext != '') {

		/* Try to COnnect to backend*/
		let url = api.baseURL+api.loginUrl
		var formData=new FormData();
        formData.append('email',emailtext);
        formData.append('password',pwdtext);
        

		fetch(url,
		    {
		  'method': 'POST',
		  'body':formData,
		  enctype:'multipart/form-data',
		  'headers': {
		    'Authorization':api.authKey,
		  }}
		  )
		      .then((response) => response.json())
		      .then((responseJson) => {	
		      console.log(responseJson.data)
		      if(responseJson.status){
		      	dispatch(homeScreen)
		      }	        
		        })
		      .catch((error) => {
		        console.error(error);
		      });
		      /*End Networking */

			}
			else{
				Alert.alert("Fill Password !");
			}

  }



  render() {
    const { navigate } = this.props.navigation;
    return (
    	
      <View style={styles.container}>
        <Text style={styles.welcome}>
              Welcome
        </Text>
        <Text style={styles.condition}>
              Agree Terms and Condition
        </Text>
        <TextInput

        style={styles.emailtextinput}
        onChangeText={(emailtext) => this.setState({emailtext})}
        placeholder="Email Id"
        value={this.state.emailtext}
      />
      <TextInput
      	secureTextEntry={true}
        style={styles.pwdtextinput}
        onChangeText={(pwdtext) => this.setState({pwdtext})}
        placeholder="Password"
        value={this.state.pwdtext}
      />
       <TouchableOpacity onPress={this._login}>
          <View style={styles.loginbutton}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>

        <Text 
        style={styles.condition}
        onPress={()=> navigate('Signup')}
        >Register</Text>

        {this.state.isLoggedIn?
        <Image 
        source={require('../img/progress4.gif')}
        style = {styles.img}
      />:<Text></Text>}
      </View>

    );
    
  }
}
