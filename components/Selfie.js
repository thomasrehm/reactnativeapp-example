import React, { Component } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

/**
 * Selfie component
 *
 * @export
 * @class Selfie
 * @extends {Component}
 */
export class Selfie extends Component {
  /**
   *Creates an instance of Selfie.
   * @param {*} props
   * @memberof Selfie
   */
  constructor(props) {
    super(props)
    this.state = {selfie: null}
  }

  /**
   * Take Picture and store base64 encoded version in store
   *
   * @memberof Selfie
   */
  async takePicture () {
    const options = { quality: 0.5, base64: true, mirrorImage: true};
    const {base64} = await this.camera.takePictureAsync(options);
    this.setState({selfie: base64})
  }
  
  /**
   * Reset image in component state
   *
   * @memberof Selfie
   */
  resetImage () {
    this.setState({selfie: null})
  }

  /**
   * render
   *
   * @returns
   * @memberof Selfie
   */
  render() {
    const selfieData = this.state.selfie;
    return (
      <View style={styles.container}>
        {selfieData &&
          <View style={styles.preview}>
            <Image 
              style={{height: 400, width: 400}}
              source={{isStatic: true, uri: `data:image/gif;base64,${selfieData}`}} 
              />
            <Text
              onPress={this.resetImage.bind(this)}
            >
              Reset
            </Text>
          </View>
        }
        {!selfieData && 
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        >
          {({ camera, status }) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <Text 
                onPress={this.takePicture.bind(this)}
                style={{ fontSize: 40 }}
              > 
                SNAP
              </Text>
            );
          }}
        </RNCamera>}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
