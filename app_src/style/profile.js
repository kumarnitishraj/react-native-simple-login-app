import { 
  StyleSheet,
     } from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#93006B',
    
    justifyContent: 'center',
  },
  imagecontainer:{    
    justifyContent: 'center',
    alignSelf: 'center',
  },
  profileimg:{
    marginBottom:5, 
    height:100,
    width: 100,
    alignSelf: 'center',
    borderRadius:50,     
    
  },
  nameText: {  
    marginBottom:2,
    color: 'white',
    fontSize:17,
    alignSelf: 'center',
    fontWeight: "bold"
  },
  text:{
    color: 'white',
    fontSize:17,
    alignSelf: 'center',
    marginBottom:5,
  },
  followRowView:{
    flex: 1,
    flexDirection: 'row',
    marginLeft:10,
    marginRight:10,
    

  },
  followInnerRowView:{
    flex: 1,
    flexDirection: 'row',
  },
  followColumView:{
    flex: 1,
    flexDirection: 'column',
    height:50,

  },
  inst_icon_img:{
    height:40,
    width: 40,
    margin:5,
  },
  you_icon_img:{
    margin:5,
    height:37,
    width: 37,
    
  },
  follwotext:{
    color: 'white',
    fontSize:15,
    alignSelf: 'center',
  },
  button:{     
    marginTop:10, 
    marginLeft:10,
    marginRight:10,
    alignItems: 'center',
    backgroundColor: '#EB97D6',
    borderRadius:10,
    height:35,
  },
   buttonText: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop:5,
    color: 'black',
    fontSize:15,
  },
  thumb_image:{
    marginTop:10,
    height:150,
    width: 100,
    backgroundColor:'white',
  },

});


export default styles;