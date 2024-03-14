import React, {forwardRef} from "react";
import SVGatorComponent from './../../assets/js/c-smart/CSMART_SinotticoReteB=';

const SinotticoReteB = forwardRef(function SinotticoReteB(props, ref) {
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

export default SinotticoReteB;
