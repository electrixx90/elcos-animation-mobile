import React, {forwardRef} from "react";
import SVGatorComponent from './../../assets/js/c-smart/CSMART-SinotticoStatus';

const SinotticoStatus = forwardRef(function SinotticoStatus(props, ref) {
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

export default SinotticoStatus;
