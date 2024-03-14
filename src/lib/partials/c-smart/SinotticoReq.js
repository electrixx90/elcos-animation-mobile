import React, {forwardRef} from "react";
import SVGatorComponent from './../../assets/js/c-smart/CSMART_SinotticoReq';

const SinotticoReq = forwardRef(function SinotticoReq(props, ref) {
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

export default SinotticoReq;
