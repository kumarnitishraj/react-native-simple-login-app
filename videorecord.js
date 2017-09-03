/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity
} from 'react-native';

import Recorder from 'react-native-screcorder';



export default class nav extends Component {
constructor(props){
  super(props)
  this.state = {
    config:{
      flashMode: Recorder.constants.SCFlashModeOff,
      video: {
        enabled: true,
        format: 'MPEG4',
      },
    },
    device: "front",
    barPosition: new Animated.Value(0),
  }
  this.reset = this.reset.bind(this)
  this.renderBar = this.renderBar.bind(this)
  this.onNewSegment = this.onNewSegment.bind(this)
  this.preview = this.preview.bind(this)
  this.toggleFlash = this.toggleFlash.bind(this)
  this.setDevice = this.setDevice.bind(this)
  this.resetBarAnimation = this.resetBarAnimation.bind(this)
  this.record = this.record.bind(this)
  this.pause = this.pause.bind(this)
}

  resetBarAnimation() {
    Animated.spring(this.state.barPosition, {toValue: 0}).start();
  }
  reset(){
    this.resetBarAnimation();
    this.refs.recorder.removeAllSegments();
    this.setState({
      recording: false,
      nbSegments: 0,
      currentDuration: 0,
      limitReached: false
    });
  }

renderBar(){
  return (
    <View style={styles.barWrapper}>
      <Animated.View style={[styles.barGauge, {width: this.state.barPosition}]}/>
    </View>
  );
}

onNewSegment(segment){
  console.log('segment = ', segment);
  this.state.currentDuration += segment.duration * 1000;
}

  record() {
    if (this.state.limitReached) return;
    this.refs.recorder.record();
    this.startBarAnimation();
    this.setState({recording: true});
  }

  pause(limitReached) {
    if (!this.state.recording) return;
    this.refs.recorder.pause();
    this.stopBarAnimation();
    this.setState({recording: false, nbSegments: ++this.state.nbSegments});
  }

  finish() {
    this.stopBarAnimation();
    this.refs.recorder.pause();
    this.setState({recording: false, limitReached: true, nbSegments: ++this.state.nbSegments});
  }
preview() {
  this.refs.recorder.save((err, url) => {
    console.log('url = ', url);
    this.props.navigator.push({component: Preview, passProps: {video: url}});
  });
}

toggleFlash() {
  if (this.state.config.flashMode == Recorder.constants.SCFlashModeOff) {
    this.state.config.flashMode = Recorder.constants.SCFlashModeLight;
  } else {
    this.state.config.flashMode = Recorder.constants.SCFlashModeOff;
  }
  this.setState({config: this.state.config});
}

setDevice () {
  device = (this.state.device == "front") ? "back" : "front";
  this.setState({device: device});
}

  render() {

    var bar     = this.renderBar();
    var control = null;

    if (!this.state.limitReached) {
      control = (
        <TouchableOpacity onPressIn={this.record} onPressOut={this.pause} style={styles.controlBtn}>
          <Text>Record</Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.container}>

      <Recorder
        ref="recorder"
        config={this.state.config}
        device={this.state.device}
        onNewSegment={this.onNewSegment}
        style={styles.wrapper}>
        {bar}
        <View style={styles.infoBtn}>
          <Text style={styles.infoBtnText}>{this.state.nbSegments}</Text>
        </View>
        <View style={styles.controls}>
          {control}
          <TouchableOpacity onPressIn={this.reset} style={styles.controlBtn}>
            <Text>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.preview} style={styles.controlBtn}>
            <Text>Preview</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleFlash} style={styles.controlBtn}>
            <Text>Flash</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.setDevice} style={styles.controlBtn}>
            <Text>Switch</Text>
          </TouchableOpacity>
        </View>
      </Recorder>

      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#93006B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
		flex: 1
	},

	barWrapper: {
		width: '100%',
		height: 10,
		backgroundColor: "black",
		opacity: 0.3
	},

	barGauge: {
		width: 0,
		height: 10,
		backgroundColor: "red"
	},

	controls: {
		position: 'absolute',
		bottom: 50,
		width: '100%',
		flexDirection: 'row',
		flexWrap: "wrap",
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: 'transparent',
		opacity: 0.6
	},

	controlBtn: {
		backgroundColor: "white",
		padding: 20,
		opacity: 0.8,
		borderRadius: 5,
		marginBottom: 10
	},

	infoBtn: {
		backgroundColor: "#2ecc71",
		opacity: 0.8,
		padding: 10,
		position: 'absolute',
		top: 20,
		right: 20,
		opacity: 0.7,
		borderRadius: 5
	},

	infoBtnText: {
		color: "white"
	}
});

