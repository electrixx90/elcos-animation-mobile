import React, {useEffect, useRef, useState} from 'react';
import "./assets/css/style.css";
import _ from "lodash";
import CeaSmart from "./CeaSmart";
import CSmart from "./CSmart";
import {eventList} from "./data/eventList";
import {Text, View, StyleSheet, BackHandler, Alert} from "react-native";
import {useNavigation} from "@react-navigation/native";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  },[value]);
  return ref.current || [];
}

/**
 *
 * @param events
 * @param sinotticoName
 * @returns {JSX.Element}
 * @export events = [
 *  ["SinotticoMode", "MODE_OFF"], ["SinotticoMotor", "MOTOR_OFF"], ...
 * ]
 * @export sinotticoName = 'cea_smart | c_smart'
 */
export default function ElcosAnimation({
                                         events = [],
                                         sinotticoName = 'cea_smart'
                                       }) {
  const [intervals, setIntervals] = useState([]);
  const prevEvents = usePrevious(events);

  const refAlarm = useRef(null);
  const refEp = useRef(null);
  const refMains = useRef(null);
  const refMode = useRef(null);
  const refMotor = useRef(null);
  const refPress = useRef(null);
  const refReq = useRef(null);
  const refReqT = useRef(null);
  const refStatus = useRef(null);
  const refTraliccio = useRef(null);
  const refReteA = useRef(null);
  const refReteB = useRef(null);
  const refCba = useRef(null);
  const refCbb = useRef(null);
  const refBattA = useRef(null);
  const refBattB = useRef(null);
  const refEngine = useRef(null);
  const refEngineProt = useRef(null);

  useEffect(() => {
    if(refAlarm && refAlarm.current) {
      refAlarm.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer['stop']; true;`);
    }

    if(refEp && refEp.current) {
      refEp.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`);
    }

    if(refMains && refMains.current) {
      refMains.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`);
    }

    if(refMode && refMode.current) {
      refMode.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`);
    }

    if(refMotor && refMotor.current) {
      refMotor.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`);
    }

    if(refPress && refPress.current) {
      refPress.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`);
    }

    if(refReq && refReq.current) {
      refReq.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`);
    }

    if(refReqT && refReqT.current) {
      refReqT.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`);
    }

    if(refStatus && refStatus.current) {
      refStatus.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`);
    }

    if(refTraliccio && refTraliccio.current) {
      refTraliccio.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`);
    }

    if(refReteA && refReteA.current) {
      refReteA.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`);
    }

    if(refReteB && refReteB.current) {
      refReteB.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`);
    }

    if(refCba && refCba.current) {
      refCba.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`);
    }

    if(refCbb && refCbb.current) {
      refCbb.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`);
    }

    if(refBattA && refBattA.current) {
      refBattA.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`);
    }

    if(refBattB && refBattB.current) {
      refBattB.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`);
    }

    if(refEngine && refEngine.current) {
      refEngine.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`);
    }

    if(refEngineProt && refEngineProt.current) {
      refEngineProt.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`);
    }

    setIntervals([]);
  }, [sinotticoName]);

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      // Prevent default behavior of back button press
      e.preventDefault();

      // Custom logic here, for example, show a confirmation modal
      // You can also conditionally execute the default behavior based on your logic

      // Perform custom logic or navigate programmatically
    });

    return unsubscribe;
  }, [navigation]);

  const createInterval = (item, player) => {
    if(player && player.current) {
      if (item.loop) {
        return setInterval(() => {
          item['fn'](player);
        }, item['duration']);
      } else {
        return item['fn'](player);
      }
    }
  }

  function processPlayerEvent(player, eventName, intv) {
    if (player && player.current && events.length > 0) {
      const flattenedEvents = _.flatten(events);
      if (flattenedEvents.includes(eventName)) {
        const e = _.find(events, e => e[0] === eventName);
        const item = eventList[e[0]][0][e[1]][0];
        const label = `${e[0]}-${e[1]}`;
        const fInt = _.find(intervals, i => i[0] === label);

        if (intervals.length && typeof fInt !== 'undefined') {
          intv.push(fInt);
        } else {
          _.forEach(intervals, i => {
            let eventName = i[0].split('-')[0];
            if (typeof i[1] === 'number' && eventName === e[0]) clearInterval(i[1]);
          });
          // [etichetta_evento, identificativo_intervallo]
          intv.push([label, createInterval(item, player)]);
        }
      }
    }
  }


  useEffect(() => {
    const evt = events.map(e => e[0]);
    const pEvt = prevEvents.map(e => e[0]);

    const diff = _.difference(pEvt, evt);

    _.forEach(diff, d => {
      const ii = intervals.find(i => i[0].startsWith(d));

      if(typeof ii !== 'undefined') {
        switch(d) {
          case 'SinotticoAlarm': refAlarm.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`); break;
          case 'SinotticoEP': refEp.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`); break;
          case 'SinotticoMains': refMains.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`); break;
          case 'SinotticoMode': refMode.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`); break;
          case 'SinotticoMotor':  refMotor.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`); break;
          case 'SinotticoPress': refPress.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`); break;
          case 'SinotticoReq': refReq.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`); break;
          case 'SinotticoReqT': refReqT.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`); break;
          case 'SinotticoStatus': refStatus.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`); break;
          case 'SinotticoTraliccio': refTraliccio.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`); break;
          case 'SinotticoReteA': refReteA.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`); break;
          case 'SinotticoReteB': refReteB.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`); break;
          case 'SinotticoCBA': refCba.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`); break;
          case 'SinotticoCBB': refCbb.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`); break;
          case 'SinotticoBattA': refBattA.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`); break;
          case 'SinotticoBattB': refBattB.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`); break;
          case 'SinotticoEngine': refEngine.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`); break;
          case 'SinotticoEngineProt': refEngineProt.current.injectJavaScript(`document.querySelector('svg').svgatorPlayer.stop(); true;`); break;
        }

        if (typeof ii[1] === 'number') clearInterval(ii[1]);
      }
    })

    let intv = [];

    processPlayerEvent(refMode, 'SinotticoMode', intv);
    processPlayerEvent(refMains, 'SinotticoMains', intv);
    processPlayerEvent(refMotor, 'SinotticoMotor', intv);
    processPlayerEvent(refEp, 'SinotticoEP', intv);
    processPlayerEvent(refPress, 'SinotticoPress', intv);
    processPlayerEvent(refAlarm, 'SinotticoAlarm', intv);
    processPlayerEvent(refStatus, 'SinotticoStatus', intv);
    processPlayerEvent(refReq, 'SinotticoReq', intv);
    processPlayerEvent(refReqT, 'SinotticoReqT', intv);

    processPlayerEvent(refTraliccio, 'SinotticoTraliccio', intv);
    processPlayerEvent(refReteA, 'SinotticoReteA', intv);
    processPlayerEvent(refReteB, 'SinotticoReteB', intv);
    processPlayerEvent(refCba, 'SinotticoCBA', intv);
    processPlayerEvent(refCbb, 'SinotticoCBB', intv);
    processPlayerEvent(refBattA, 'SinotticoBattA', intv);
    processPlayerEvent(refBattB, 'SinotticoBattB', intv);
    processPlayerEvent(refEngine, 'SinotticoEngine', intv);
    processPlayerEvent(refEngineProt, 'SinotticoEngineProt', intv);

    setIntervals(intv);

  }, [events]);

  switch (sinotticoName) {
    case 'cea_smart':
      return <View style={styles.container}>
        <CeaSmart ref={{
          refAlarm: refAlarm,
          refEp: refEp,
          refMains: refMains,
          refMode: refMode,
          refMotor: refMotor,
          refPress: refPress,
          refReq: refReq,
          refReqT: refReqT,
          refStatus: refStatus
        }}
      />
      </View>;

    case 'c_smart':
      return <View style={styles.container}>
        <CSmart ref={{
          refBattA: refBattA,
          refBattB: refBattB,
          refCba: refCba,
          refCbb: refCbb,
          refEngine: refEngine,
          refEngineProt: refEngineProt,
          refReteA: refReteA,
          refReteB: refReteB,
          refTraliccio: refTraliccio,
          refPress: refPress,
          refReq: refReq,
          refReqT: refReqT,
          refStatus: refStatus,
          refAlarm: refAlarm,
          refMode: refMode
        }}
      />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    height: 400,
    width: "100%",
  }
});
