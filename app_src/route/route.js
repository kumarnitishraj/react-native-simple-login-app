app_srcimport React from "react";
import { StackNavigator } from "react-navigation";
import Profile from "../app_src/profile/profile";
import Login from "../app_src/loginmodule/loginslide";
import Register from "../app_src/register/register";


const Route = StackNavigator({
  Login:{
  	screen:Profile,
  	header: null,
    navigationOptions: {
        header: null
    	} 
	},
  Home:{
  	screen: Profile ,
  	header: null,
    navigationOptions: {
        header: null
    	} 
	}, 
  Watch:{
  	screen: Watch ,
  	header: null,
    navigationOptions: {
        header: null
    	} 
	},
  Signup:{
    screen: Register ,
    header: null,
    navigationOptions: {
        header: null
      } 
  },
});

export default Route;