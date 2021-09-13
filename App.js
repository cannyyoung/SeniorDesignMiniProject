/*Codes Referenced from: 
https://gist.github.com/goodpic/f1ba553d85f96c76b6b2992faf037d87
https://blog.jscrambler.com/how-to-use-react-native-camera
*/
import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, Alert, AppRegistry, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

class FoodScannerApp extends Component {

  state = {code: 1, picture: 2};

  onBarCodeRead(scanData){
    this.setState({code: scanData.data});
    console.warn(this.state.code);
  }


  render(){
    return(
    <View style={styles.MyStyle}>
        <RNCamera style = {styles.CameraStyle}
          ref = {ref => {
            this.camera = ref;
          }}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          />
          <View style={styles.MyButtonWin}>
            <TouchableOpacity onPress={this.takePictures.bind(this)} style={styles.MyButton}>
                <Text style={{fontSize: 12}}>Take Picture</Text>
            </TouchableOpacity>
          </View>
    </View>
    )
  }

  takePictures = async() => {
  const options = { quality: 0.5, base64: true };
  const data = await camera.takePictureAsync(options);
  console.log(data.uri);
  this.setState({picture: data.uri});
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