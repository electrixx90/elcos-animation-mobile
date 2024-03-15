import React, {forwardRef} from 'react';
import SinotticoBattA from "./partials/c-smart/SinotticoBattA";
import SinotticoBattB from "./partials/c-smart/SinotticoBattB";
import SinotticoCBA from "./partials/c-smart/SinotticoCBA";
import SinotticoCBB from "./partials/c-smart/SinotticoCBB";
import SinotticoEngine from "./partials/c-smart/SinotticoEngine";
import SinotticoEngineProt from "./partials/c-smart/SinotticoEngineProt";
import SinotticoReteA from "./partials/c-smart/SinotticoReteA";
import SinotticoReteB from "./partials/c-smart/SinotticoReteB";
import SinotticoTraliccio from "./partials/c-smart/SinotticoTraliccio";
import SinotticoPress from "./partials/c-smart/SinotticoPress";
import SinotticoReqT from "./partials/c-smart/SinotticoReqT";
import SinotticoReq from "./partials/c-smart/SinotticoReq";
import SinotticoAlarm from "./partials/c-smart/SinotticoAlarm";
import SinotticoMode from "./partials/c-smart/SinotticoMode";
import SinotticoStatus from "./partials/c-smart/SinotticoStatus";

const CSmart = forwardRef(function CeaSmart(props, ref) {
  const {
    refBattA,
    refBattB,
    refCba,
    refCbb,
    refEngine,
    refEngineProt,
    refReteA,
    refReteB,
    refTraliccio,
    refPress,
    refReqT,
    refReq,
    refAlarm,
    refMode,
    refStatus
  } = ref;

  return (
    <>
      <SinotticoBattA ref={refBattA} />
      <SinotticoBattB ref={refBattB} />
      <SinotticoCBA ref={refCba} />
      <SinotticoCBB ref={refCbb} />
      <SinotticoEngine ref={refEngine} />
      <SinotticoEngineProt ref={refEngineProt} />
      <SinotticoReteA ref={refReteA} />
      <SinotticoReteB ref={refReteB} />
      <SinotticoTraliccio ref={refTraliccio} />
      <SinotticoPress ref={refPress} />
      <SinotticoReqT ref={refReqT} />
      <SinotticoReq ref={refReq} />
      <SinotticoAlarm ref={refAlarm} />
      <SinotticoMode ref={refMode} />
      <SinotticoStatus ref={refStatus} />
    </>
  )
})

export default CSmart;
