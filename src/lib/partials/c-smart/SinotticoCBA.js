import React, {forwardRef} from "react";
import SVGatorComponent from './../../assets/js/c-smart/CSMART_SinotticoCBA=';

const SinotticoCBA = forwardRef(function SinotticoCBA(props, ref) {
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

export default SinotticoCBA;
