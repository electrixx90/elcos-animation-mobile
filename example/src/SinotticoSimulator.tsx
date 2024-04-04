import {useEffect, useState} from "react";
import {Button, ScrollView, StyleSheet, Text, View} from "react-native";
import Collapsible from "react-native-collapsible";
import {Picker} from "@react-native-picker/picker";
import * as React from "react";
import Animation from 'elcos-animation-mobile';
import _ from 'lodash';

export default function SinotticoSimulator({navigation}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [events, setEvents] = useState([]);
  const [waitingEvents, setWaitingEvents] = useState([]);
  const [sinotticoName, setSinotticoName] = useState("c_smart");

  const [sinotticoMode, setSinotticoMode] = useState(null);
  const [sinotticoMains, setSinotticoMains] = useState(null);
  const [sinotticoMotor, setSinotticoMotor] = useState(null);
  const [sinotticoEP, setSinotticoEP] = useState(null);
  const [sinotticoPress, setSinotticoPress] = useState(null);
  const [sinotticoAlarm, setSinotticoAlarm] = useState(null);
  const [sinotticoStatus, setSinotticoStatus] = useState(null);
  const [sinotticoReq, setSinotticoReq] = useState(null);
  const [sinotticoReqT, setSinotticoReqT] = useState(null);
  const [sinotticoTraliccio, setSinotticoTraliccio] = useState(null);
  const [sinotticoReteA, setSinotticoReteA] = useState(null);
  const [sinotticoReteB, setSinotticoReteB] = useState(null);
  const [sinotticoCBA, setSinotticoCBA] = useState(null);
  const [sinotticoCBB, setSinotticoCBB] = useState(null);
  const [sinotticoBattA, setSinotticoBattA] = useState(null);
  const [sinotticoBattB, setSinotticoBattB] = useState(null);
  const [sinotticoEngine, setSinotticoEngine] = useState(null);
  const [sinotticoEngineProt, setSinotticoEngineProt] = useState(null);

  const manageEvents = (origin, value) => {
    value = value.split(',');

    let es = [...waitingEvents];

    _.remove(es, value => value[0] === origin);

    if (value[0] !== '' && value[0] !== null) {
      es.push(value);
    }

    setWaitingEvents(es);
  }

  useEffect(() => {
    setEvents([]);

    setSinotticoMode(null);
    setSinotticoMains(null);
    setSinotticoMotor(null);
    setSinotticoEP(null);
    setSinotticoPress(null);
    setSinotticoAlarm(null);
    setSinotticoStatus(null);
    setSinotticoReq(null);
    setSinotticoReqT(null);
    setSinotticoTraliccio(null);
    setSinotticoReteA(null);
    setSinotticoReteB(null);
    setSinotticoCBA(null);
    setSinotticoCBB(null);
    setSinotticoBattA(null);
    setSinotticoBattB(null);
    setSinotticoEngine(null);
    setSinotticoEngineProt(null);
  }, [sinotticoName]);

  return (
    <ScrollView>
      <View style={styles.buttonCollapseContainer}>
        <Button color="#841584" onPress={() => setIsCollapsed(!isCollapsed)}
                title={(isCollapsed) ? "Espandi" : "Comprimi"}>
          {(isCollapsed) ? "Espandi" : "Comprimi"}
        </Button>
      </View>

      <Collapsible collapsed={isCollapsed} renderChildrenCollapsed={true}>
        <View style={styles.container}>
          <View style={styles.pickerContainer}>
            <Text style={styles.label}>SINOTTICO</Text>
            <Picker style={styles.picker} onValueChange={(value) => {
              setSinotticoName(value);
            }} selectedValue={sinotticoName}>
              <Picker.Item label="" value="" style={styles.pickerItem}/>
              <Picker.Item label="CEA-SMART" value="cea_smart" style={styles.pickerItem}/>
              <Picker.Item label="C-SMART" value="c_smart" style={styles.pickerItem}/>
            </Picker>
          </View>

          <View style={styles.pickerContainer}>
            <Text style={styles.label}>Mode</Text>
            <Picker style={styles.picker} onValueChange={(value) => {
              setSinotticoMode(value);
              manageEvents("SinotticoMode", value)
            }} selectedValue={sinotticoMode}>
              <Picker.Item label="" value="" style={styles.pickerItem}/>
              <Picker.Item label="MODE_OFF" value="SinotticoMode,MODE_OFF" style={styles.pickerItem}/>
              <Picker.Item label="MODE_MAN" value="SinotticoMode,MODE_MAN" style={styles.pickerItem}/>
              <Picker.Item label="MODE_AUT" value="SinotticoMode,MODE_AUT" style={styles.pickerItem}/>
              <Picker.Item label="MODE_AUT_ESC" value="SinotticoMode,MODE_AUT_ESC" style={styles.pickerItem}/>
              <Picker.Item label="MODE_AUT_INC" value="SinotticoMode,MODE_AUT_INC" style={styles.pickerItem}/>
            </Picker>
          </View>

          <View style={styles.pickerContainer}>
            <Text style={styles.label}>Alarm</Text>
            <Picker style={styles.picker} onValueChange={(value) => {
              setSinotticoAlarm(value);
              manageEvents("SinotticoAlarm", value)
            }} selectedValue={sinotticoAlarm}>
              <Picker.Item label="" value="" style={styles.pickerItem}/>
              <Picker.Item label="ALARM_NO" value="SinotticoAlarm,ALARM_NO" style={styles.pickerItem}/>
              <Picker.Item label="ALARM_Y_B" value="SinotticoAlarm,ALARM_Y_B" style={styles.pickerItem}/>
              <Picker.Item label="ALARM_Y_A" value="SinotticoAlarm,ALARM_Y_A" style={styles.pickerItem}/>
            </Picker>
          </View>

          <View style={styles.pickerContainer}>
            <Text style={styles.label}>Status</Text>
            <Picker style={styles.picker} onValueChange={(value) => {
              setSinotticoStatus(value);
              manageEvents("SinotticoStatus", value)
            }} selectedValue={sinotticoStatus}>
              <Picker.Item label="" value="" style={styles.pickerItem}/>
              <Picker.Item label="ANOM_NO" value="SinotticoStatus,ANOM_NO" style={styles.pickerItem}/>
              <Picker.Item label="ANOM_YES" value="SinotticoStatus,ANOM_YES" style={styles.pickerItem}/>
            </Picker>
          </View>

          <View style={styles.pickerContainer}>
            <Text style={styles.label}>Press</Text>
            <Picker style={styles.picker} onValueChange={(value) => {
              setSinotticoPress(value);
              manageEvents("SinotticoPress", value)
            }} selectedValue={sinotticoPress}>
              <Picker.Item label="" value="" style={styles.pickerItem}/>
              <Picker.Item label="PRESS_EXCL" value="SinotticoPress,PRESS_EXCL" style={styles.pickerItem}/>
              <Picker.Item label="PRESS_YES" value="SinotticoPress,PRESS_YES" style={styles.pickerItem}/>
              <Picker.Item label="PRESS_NO" value="SinotticoPress,PRESS_NO" style={styles.pickerItem}/>
            </Picker>
          </View>

          <View style={styles.pickerContainer}>
            <Text style={styles.label}>Req</Text>
            <Picker style={styles.picker} onValueChange={(value) => {
              setSinotticoReq(value);
              manageEvents("SinotticoReq", value)
            }} selectedValue={sinotticoReq}>
              <Picker.Item label="" value="" style={styles.pickerItem}/>
              <Picker.Item label="REQ_NO" value="SinotticoReq,REQ_NO" style={styles.pickerItem}/>
              <Picker.Item label="REQ_START" value="SinotticoReq,REQ_START" style={styles.pickerItem}/>
              <Picker.Item label="REQ_STOP" value="SinotticoReq,REQ_STOP" style={styles.pickerItem}/>
            </Picker>
          </View>

          <View style={styles.pickerContainer}>
            <Text style={styles.label}>ReqT</Text>
            <Picker style={styles.picker} onValueChange={(value) => {
              setSinotticoReqT(value);
              manageEvents("SinotticoReqT", value)
            }}
                    selectedValue={sinotticoReqT}>
              <Picker.Item label="" value="" style={styles.pickerItem}/>
              <Picker.Item label="REQT_NO" value="SinotticoReqT,REQT_NO" style={styles.pickerItem}/>
              <Picker.Item label="REQT_PRESS" value="SinotticoReqT,REQT_PRESS" style={styles.pickerItem}/>
              <Picker.Item label="REQT_GALL" value="SinotticoReqT,REQT_GALL" style={styles.pickerItem}/>
              <Picker.Item label="REQT_TEST" value="SinotticoReqT,REQT_TEST" style={styles.pickerItem}/>
              <Picker.Item label="REQT_TP" value="SinotticoReqT,REQT_TP" style={styles.pickerItem}/>
              <Picker.Item label="REQT_IN" value="SinotticoReqT,REQT_IN" style={styles.pickerItem}/>
              <Picker.Item label="REQT_KEY" value="SinotticoReqT,REQT_KEY" style={styles.pickerItem}/>
            </Picker>
          </View>

          <View>
            <View style={styles.pickerContainer}>
              <Text style={styles.label}>Mains</Text>
              <Picker style={styles.picker} onValueChange={(value) => {
                setSinotticoMains(value);
                manageEvents("SinotticoMains", value)
              }} selectedValue={sinotticoMains}>
                <Picker.Item label="" value="" style={styles.pickerItem}/>
                <Picker.Item label="MAINS_ABS" value="SinotticoMains,MAINS_ABS" style={styles.pickerItem}/>
                <Picker.Item label="MAINS_PRES" value="SinotticoMains,MAINS_PRES" style={styles.pickerItem}/>
                <Picker.Item label="MAINS_ANOM" value="SinotticoMains,MAINS_ANOM" style={styles.pickerItem}/>
                <Picker.Item label="MAINS_WAIT" value="SinotticoMains,MAINS_WAIT" style={styles.pickerItem}/>
              </Picker>
            </View>

            <View style={styles.pickerContainer}>
              <Text style={styles.label}>Motor</Text>
              <Picker style={styles.picker} onValueChange={(value) => {
                setSinotticoMotor(value);
                manageEvents("SinotticoMotor", value)
              }} selectedValue={sinotticoMotor}>
                <Picker.Item label="" value="" style={styles.pickerItem}/>
                <Picker.Item label="MOTOR_OFF" value="SinotticoMotor,MOTOR_OFF" style={styles.pickerItem}/>
                <Picker.Item label="MOTOR_ON" value="SinotticoMotor,MOTOR_ON" style={styles.pickerItem}/>
              </Picker>
            </View>

            <View style={styles.pickerContainer}>
              <Text style={styles.label}>EP</Text>
              <Picker style={styles.picker} onValueChange={(value) => {
                setSinotticoEP(value);
                manageEvents("SinotticoEP", value)
              }} selectedValue={sinotticoEP}>
                <Picker.Item label="" value="" style={styles.pickerItem}/>
                <Picker.Item label="EP_OFF" value="SinotticoEP,EP_OFF" style={styles.pickerItem}/>
                <Picker.Item label="EP_ON" value="SinotticoEP,EP_ON" style={styles.pickerItem}/>
              </Picker>
            </View>
          </View>

          <View>
            <View style={styles.pickerContainer}>
              <Text style={styles.label}>BattA</Text>
              <Picker style={styles.picker} onValueChange={value => {
                setSinotticoBattA(value);
                manageEvents("SinotticoBattA", value)
              }} selectedValue={sinotticoBattA}>
                <Picker.Item label="" value="" style={styles.pickerItem}/>
                <Picker.Item label="BATT_ABS" value="SinotticoBattA,BATT_ABS" style={styles.pickerItem}/>
                <Picker.Item label="BATT_PRESS" value="SinotticoBattA,BATT_PRESS" style={styles.pickerItem}/>
                <Picker.Item label="BATT_ANOM" value="SinotticoBattA,BATT_ANOM" style={styles.pickerItem}/>
              </Picker>
            </View>

            <View style={styles.pickerContainer}>
              <Text style={styles.label}>BattB</Text>
              <Picker style={styles.picker} onValueChange={value => {
                setSinotticoBattB(value);
                manageEvents("SinotticoBattB", value)
              }} selectedValue={sinotticoBattB}>
                <Picker.Item label="" value="" style={styles.pickerItem}/>
                <Picker.Item label="BATT_ABS" value="SinotticoBattB,BATT_ABS" style={styles.pickerItem}/>
                <Picker.Item label="BATT_PRESS" value="SinotticoBattB,BATT_PRESS" style={styles.pickerItem}/>
                <Picker.Item label="BATT_ANOM" value="SinotticoBattB,BATT_ANOM" style={styles.pickerItem}/>
              </Picker>
            </View>

            <View style={styles.pickerContainer}>
              <Text style={styles.label}>CBA</Text>
              <Picker style={styles.picker} onValueChange={value => {
                setSinotticoCBA(value);
                manageEvents("SinotticoCBA", value)
              }} selectedValue={sinotticoCBA}>
                <Picker.Item label="" value="" style={styles.pickerItem}/>
                <Picker.Item label="CB_ABS" value="SinotticoCBA,CB_ABS" style={styles.pickerItem}/>
                <Picker.Item label="CB_PRESS" value="SinotticoCBA,CB_PRESS" style={styles.pickerItem}/>
                <Picker.Item label="CB_ANOM" value="SinotticoCBA,CB_ANOM" style={styles.pickerItem}/>
              </Picker>
            </View>

            <View style={styles.pickerContainer}>
              <Text style={styles.label}>CBB</Text>
              <Picker style={styles.picker} onValueChange={value => {
                setSinotticoCBB(value);
                manageEvents("SinotticoCBB", value)
              }} selectedValue={sinotticoCBB}>
                <Picker.Item label="" value="" style={styles.pickerItem}/>
                <Picker.Item label="CB_ABS" value="SinotticoCBB,CB_ABS" style={styles.pickerItem}/>
                <Picker.Item label="CB_PRESS" value="SinotticoCBB,CB_PRESS" style={styles.pickerItem}/>
                <Picker.Item label="CB_ANOM" value="SinotticoCBB,CB_ANOM" style={styles.pickerItem}/>
              </Picker>
            </View>

            <View style={styles.pickerContainer}>
              <Text style={styles.label}>EngineProt</Text>
              <Picker style={styles.picker} onValueChange={value => {
                setSinotticoEngineProt(value);
                manageEvents("SinotticoEngineProt", value)
              }} selectedValue={sinotticoEngineProt}>
                <Picker.Item label="" value="" style={styles.pickerItem}/>
                <Picker.Item label="ENGINEPROT_ON" value="SinotticoEngineProt,ENGINEPROT_ON" style={styles.pickerItem}/>
                <Picker.Item label="ENGINEPROT_OFF" value="SinotticoEngineProt,ENGINEPROT_OFF"
                             style={styles.pickerItem}/>
              </Picker>
            </View>

            <View style={styles.pickerContainer}>
              <Text style={styles.label}>Engine</Text>
              <Picker style={styles.picker} onValueChange={value => {
                setSinotticoEngine(value);
                manageEvents("SinotticoEngine", value)
              }} selectedValue={sinotticoEngine}>
                <Picker.Item label="" value="" style={styles.pickerItem}/>
                <Picker.Item label="ENGINE_ON" value="SinotticoEngine,ENGINE_ON" style={styles.pickerItem}/>
                <Picker.Item label="ENGINE_OFF" value="SinotticoEngine,ENGINE_OFF" style={styles.pickerItem}/>
              </Picker>
            </View>

            <View style={styles.pickerContainer}>
              <Text style={styles.label}>ReteA</Text>
              <Picker style={styles.picker} onValueChange={value => {
                setSinotticoReteA(value);
                manageEvents("SinotticoReteA", value)
              }} selectedValue={sinotticoReteA}>
                <Picker.Item label="" value="" style={styles.pickerItem}/>
                <Picker.Item label="CBRETE_ABS" value="SinotticoReteA,CBRETE_ABS" style={styles.pickerItem}/>
                <Picker.Item label="CBRETE_OK" value="SinotticoReteA,CBRETE_OK" style={styles.pickerItem}/>
                <Picker.Item label="CBRETE_UNPL" value="SinotticoReteA,CBRETE_UNPL" style={styles.pickerItem}/>
              </Picker>
            </View>

            <View style={styles.pickerContainer}>
              <Text style={styles.label}>ReteB</Text>
              <Picker style={styles.picker} onValueChange={value => {
                setSinotticoReteB(value);
                manageEvents("SinotticoReteB", value)
              }} selectedValue={sinotticoReteB}>
                <Picker.Item label="" value="" style={styles.pickerItem}/>
                <Picker.Item label="CBRETE_ABS" value="SinotticoReteB,CBRETE_ABS" style={styles.pickerItem}/>
                <Picker.Item label="CBRETE_OK" value="SinotticoReteB,CBRETE_OK" style={styles.pickerItem}/>
                <Picker.Item label="CBRETE_UNPL" value="SinotticoReteB,CBRETE_UNPL" style={styles.pickerItem}/>
              </Picker>
            </View>

            <View style={styles.pickerContainer}>
              <Text style={styles.label}>Traliccio</Text>
              <Picker style={styles.picker} onValueChange={value => {
                setSinotticoTraliccio(value);
                manageEvents("SinotticoTraliccio", value)
              }} selectedValue={sinotticoTraliccio}>
                <Picker.Item label="" value="" style={styles.pickerItem}/>
                <Picker.Item label="TRALICCIO_NO" value="SinotticoTraliccio,TRALICCIO_NO" style={styles.pickerItem}/>
                <Picker.Item label="TRALICCIO_YES" value="SinotticoTraliccio,TRALICCIO_YES" style={styles.pickerItem}/>
              </Picker>
            </View>
          </View>

          <View style={styles.sendContainer}>
            <Button onPress={(value) => {
              setEvents(waitingEvents);
              setIsCollapsed(true);
            }} title="Invia dati">INVIA DATI</Button>
          </View>
        </View>
      </Collapsible>

      {
        isCollapsed && <View style={styles.container}>
          {
            events.map((e, i) => <Text key={i}>{sinotticoName} - {JSON.stringify(e)}</Text>)
          }
        </View>
      }

      <View style={styles.container}>
        <Animation events={events} sinotticoName={sinotticoName} navigation={navigation} />
      </View>

      <View>
        <Button
          title="Go to Foo Page"
          onPress={() => navigation.navigate('FooPage')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonCollapseContainer: {
    paddingTop: 30,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20
  },
  pickerContainer: {
    flex: 1,
    flexDirection: "row",
    columnGap: 20,
    paddingTop: 10
  },
  label: {
    flex: 1,
    paddingTop: 10,
    width: 130,
    fontWeight: "bold",
    fontSize: 16
  },
  picker: {
    flex: 1.5,
    backgroundColor: "#dddddd"
  },
  pickerItem: {
    fontSize: 12
  },
  sendContainer: {
    paddingTop: 20
  }
});
