/*Codes Referenced from: 
https://gist.github.com/goodpic/f1ba553d85f96c76b6b2992faf037d87
https://blog.jscrambler.com/how-to-use-react-native-camera
https://github.com/react-native-cameraroll/react-native-cameraroll
https://www.fullstacklabs.co/blog/react-native-camera

in case of load script error, run this instead of npm start:
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res


*/
import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, Alert, AppRegistry, TouchableOpacity, PermissionsAndroid, Platform } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";
import {
GoogleSignin,
GoogleSigninButton,
statusCodes,
} from 'react-native-google-signin';

async function hasAndroidPermission() {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
}

async function savePicture() {
  if (Platform.OS === "android" && !(await hasAndroidPermission())) {
    return;
  }

  CameraRoll.save(tag, { type, album })
};

class FoodScannerApp extends Component {

  constructor(props){
    super(props);
    this.state = {
      takingPic: false, code: 1, picture: 2, picture_taken : false,
    };
  }

  onBarCodeRead(scanData){
    this.setState({code: scanData.data});
    if(this.state.code != 1)
    Alert.alert('Barcode read', JSON.stringify(this.state.code));
  }

  takePictures = async() => {
    if(this.camera && !(this.state.takingPic)){
      let options = { quality: 0.5, base64: true };

      this.state.takingPic = false;
      try{
          const data = await this.camera.takePictureAsync(options);
          CameraRoll.saveToCameraRoll(data.uri);
          Alert.alert('Success', JSON.stringify(data.uri));
      } catch(err){
          Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
          return;
      }
       finally {
          this.setState({takingPic: false});
      }


      console.log(data.uri);

      this.setState({picture: data.uri, picture_taken: true});
    }
    }

  render(){
    hasAndroidPermission();
    savePicture();
    return(
    <View style={styles.MyStyle}>
        <RNCamera style = {styles.CameraStyle}
          ref = {ref => {
            this.camera = ref;
          }}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          captureAudio={false}
          />
          <View style={styles.MyButtonWin}>
            <TouchableOpacity onPress={this.takePictures.bind(this)} style={styles.MyButton}>
                <Text style={{fontSize: 12}}>Take Picture</Text>
            </TouchableOpacity>
          </View>
    </View>
    )
  }

}

const styles = StyleSheet.create({
    MyStyle : {
        flex : 1,
        flexDirection : 'column',
        backgroundColor: 'black',
    },
    CameraStyle : {
        flex : 1,
        alignItems: 'center',
    },
    MyButton : {
        flex : 0,
        backgroundColor: 'white',
        borderRadius : 10,
        padding: 20,
        paddingHorizontal: 10,
        alignSelf: 'center',
        flexDirection : 'row',
    },
    MyButtonWin : {
            flex : 0,
            flexDirection : 'row',
            justifyContent : 'center',
    }
})

export default FoodScannerApp