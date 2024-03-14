import React, {forwardRef} from "react";
import SVGatorComponent from './../../assets/js/cea-smart/Elcos-SinotticoEP';

const SinotticoEP = forwardRef(function SinotticoEP(props, ref) {
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

export default SinotticoEP;

