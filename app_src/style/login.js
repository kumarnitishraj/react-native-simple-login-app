import { 
  StyleSheet,
     } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#93006B',
    
    justifyContent: 'center',
  },
  emailtextinput:{
    
    borderColor:'#E1C7DA',
    color:'#E1C7DA',
    borderWidth:1,
    marginLeft:10,
    marginRight:10,
    borderRadius:5, 
    marginBottom:10,
    paddingLeft:7,      
    height:50,
    
  },
  pwdtextinput:{
    
    borderColor:'#E1C7DA',
    color:'#E1C7DA',
    borderWidth:1,    
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    borderRadius:5, 
    marginBottom:10,
    paddingLeft:7,   
    height:50,
    
  },
  welcome:{
    color:'#E1C7DA',
    fontSize:50,
    marginBottom:10,
    alignSelf: 'center',
  },
  condition:{
    color:'#E1C7DA',
    fontSize:15,
    marginTop:15,
    marginBottom:50,
    alignSelf: 'center',
  },
  loginbutton:{ 
  marginTop:20,   
    marginBottom: 30,    
    marginLeft:10,
    marginRight:10,
    alignItems: 'center',
    backgroundColor: '#4d0038',
    borderRadius:5,
    height:50,
  },
   buttonText: {
    padding: 10,
    color: 'white',
    fontSize:20,
  },
   img:{
    height:100,
    width:100,
    bottom:0,
    position: 'absolute',

    alignSelf: 'center',
  }
});


export default styles;