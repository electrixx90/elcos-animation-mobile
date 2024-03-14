import React, {forwardRef} from "react";
import SinotticoAlarm from "./partials/cea-smart/SinotticoAlarm";
import SinotticoEP from "./partials/cea-smart/SinotticoEP";
import SinotticoMains from "./partials/cea-smart/SinotticoMains";
import SinotticoMode from "./partials/cea-smart/SinotticoMode";
import SinotticoMotor from "./partials/cea-smart/SinotticoMotor";
import SinotticoPress from "./partials/cea-smart/SinotticoPress";
import SinotticoReq from "./partials/cea-smart/SinotticoReq";
import SinotticoReqT from "./partials/cea-smart/SinotticoReqT";
import SinotticoStatus from "./partials/cea-smart/SinotticoStatus";
import {View} from "react-native";
import {StyleSheet} from "react-native";


const CeaSmart = forwardRef(function CeaSmart(props, ref) {
  const {
    refAlarm,
    refEp,
    refMains,
    refMode,
    refMotor,
    refPress,
    refReq,
    refReqT,
    refStatus
  } = ref;

  return (
    <View>
      <SinotticoAlarm ref={refAlarm} />
      <SinotticoEP ref={refEp} />
      <SinotticoMains ref={refMains} />
      <SinotticoMode ref={refMode} />
      <SinotticoMotor ref={refMotor} />
      <SinotticoPress ref={refPress} />
      <SinotticoReq ref={refReq} />
      <SinotticoReqT ref={refReqT} />
      <SinotticoStatus ref={refStatus} />
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40
  },
  picker: {
    width: 160
  },
  pickerItem: {
    fontSize: 10
  }
});

export default CeaSmart;


