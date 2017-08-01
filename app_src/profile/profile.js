import React from 'react';
import { 
  StyleSheet,
   Text,
    View,
    TextInput,
    Button,
    Alert,
    Image,
    TouchableOpacity

     } from 'react-native';

import styles from '../app_src/style/profile'

export default class Profile extends React.Component {
  constructor(props) {
      super(props);
      }
     _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 0.5,}} />

        {/* Image sections only*/}
        <View style={{flex: 4, }} >

          {/* Start Image sections */}

          <View style={styles.imagecontainer}>
            <Image 
            source={require('../img/profile_img.jpg')}
            style = {styles.profileimg}
             />
            <Text style={styles.nameText}>
              Mark
            </Text>
            <Text style={styles.text}>
              Folling Fitness Expert
            </Text>
          </View>

              {/* End Image sections */}

            {/* Start Follow sections */}

          <View style={styles.followRowView}>
          <View style={styles.followColumView}>
            <View style={styles.followInnerRowView}>
              <Text style={styles.follwotext}>
                125k
              </Text>
            </View>
            <View style={styles.followInnerRowView}>
              <Text style={styles.follwotext}>
                Followers
              </Text>
            </View>
          </View>
          <View style={styles.followColumView}>
            <View style={styles.followInnerRowView}>
              <Text style={styles.follwotext}>
                125k
              </Text>
            </View>
            <View style={styles.followInnerRowView}>
              <Text style={styles.follwotext}>
                Followers
              </Text>
            </View>
          </View>
          
          <View style={{flex: 1,flexDirection: 'row'}}>
            <View style={{flex: 1,flexDirection: 'row'}}>
              <Image 
                source={require('../img/instagram-icon.png')}
                style = {styles.inst_icon_img}
               />
            </View>
            <View style={{flex: 1,flexDirection: 'row'}}>
             <Image 
              source={require('../img/youtube-circle.png')}
              style = {styles.you_icon_img}
             />
            </View>
          </View>
         </View>

         {/* End Follow sections */}

         <View style={{flex: 1,flexDirection: 'row'}}>
            <View style={{flex: 2,flexDirection: 'row'}}>
               <TouchableOpacity onPress={this._onPressButton}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Game</Text>
                  </View>
                </TouchableOpacity>
            </View>
            <View style={{flex: 3,flexDirection: 'row',}}>
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Best Game</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{flex: 1,flexDirection: 'row'}}>
             <Image 
              source={require('../img/notifications.png')}
              style = {styles.you_icon_img}
             />
            </View>
          </View>

        </View>



        <View style={{flex: 3}} >


        <View style={{flex: 1,flexDirection: 'row'}}>
            <View style={{flex: 1,flexDirection: 'row'}}>
               <Image 
              source={require('../img/thumbnail/fit1.png')}
              style = {styles.thumb_image}
             />
            </View>
            <View style={{flex: 1,flexDirection: 'row',}}>
              <Image 
              source={require('../img/thumbnail/fit2.png')}
              style = {styles.thumb_image}
             />
            </View>

            <View style={{flex: 1,flexDirection: 'row'}}>
             <Image 
              source={require('../img/thumbnail/fit3.png')}
              style = {styles.thumb_image}
             />
            </View>
          </View>

        </View>
       </View>
    );
  }
}