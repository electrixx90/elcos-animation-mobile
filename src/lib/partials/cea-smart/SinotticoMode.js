import React, {forwardRef, useEffect, useRef} from "react";
import SVGatorComponent from './../../assets/js/cea-smart/Elcos-SinotticoMode';
import {StyleSheet, View} from "react-native";

const SinotticoMode = forwardRef(function SinotticoMode(props, ref) {
  const ReceiveMessage = (event) => { };

  const svgProps = {
    ref: ref,
    container: {
      position: 'absolute'
    },
    onMessage: ReceiveMessage
  };

  return <SVGatorComponent {...svgProps}  />
});

export default SinotticoMode;
