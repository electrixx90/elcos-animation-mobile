{/*<View>
      <View style={styles.container}>
        <View>*/
  {/*<Text>SinotticoMode</Text>
          <Picker style={styles.picker} onValueChange={(value) => {
            setSinotticoMode(value);
            manageEvents("SinotticoMode", value)
          }} selectedValue={sinotticoMode}>
            <Picker.Item label="" value="" />
            <Picker.Item label="MODE_OFF" value="SinotticoMode,MODE_OFF" style={styles.pickerItem} />
            <Picker.Item label="MODE_MAN" value="SinotticoMode,MODE_MAN" style={styles.pickerItem} />
            <Picker.Item label="MODE_AUT" value="SinotticoMode,MODE_AUT" style={styles.pickerItem} />
            <Picker.Item label="MODE_AUT_ESC" value="SinotticoMode,MODE_AUT_ESC" style={styles.pickerItem} />
            <Picker.Item label="MODE_AUT_INC" value="SinotticoMode,MODE_AUT_INC" style={styles.pickerItem} />
          </Picker>

          <View>
            <Button onPress={(e) => setEvents(waitingEvents)} title="Invia dati">INVIA DATI</Button>
          </View>*/}

  {/*<Text>SinotticoAlarm</Text>
          <Picker ref={selectSinotticoAlarm} onValueChange={(e) => manageEvents("SinotticoAlarm", e.currentTarget.value)}
            items={[
              {label: "", value: null},
              {label: "ALARM_NO", value: "SinotticoAlarm,ALARM_NO"},
              {label: "ALARM_Y_B", value: "SinotticoAlarm,ALARM_Y_B"},
              {label: "ALARM_Y_A", value: "SinotticoAlarm,ALARM_Y_A"},
            ]}
          />

          <Text>SinotticoStatus</Text>
          <Picker ref={selectSinotticoStatus} onValueChange={(e) => manageEvents("SinotticoStatus", e.currentTarget.value)}
            items={[
              {label: "", value: null},
              {label: "ANOM_NO", value: "SinotticoStatus,ANOM_NO"},
              {label: "ANOM_YES", value: "SinotticoStatus,ANOM_YES"},
            ]}
          />

          <Text>SinotticoPress</Text>
          <Picker ref={selectSinotticoPress} onValueChange={(e) => manageEvents("SinotticoPress", e.currentTarget.value)}
            items={[
              {label: "", value: null},
              {label: "PRESS_EXCL", value: "SinotticoPress,PRESS_EXCL"},
              {label: "PRESS_YES", value: "SinotticoPress,PRESS_YES"},
              {label: "PRESS_NO", value: "SinotticoPress,PRESS_NO"}
            ]}
          />

          <Text>SinotticoReq</Text>
          <Picker ref={selectSinotticoReq} onValueChange={(e) => manageEvents("SinotticoReq", e.currentTarget.value)}
            items={[
              {label: "", value: null},
              {label: "REQ_NO", value: "SinotticoReq,REQ_NO"},
              {label: "REQ_START", value: "SinotticoReq,REQ_START"},
              {label: "REQ_STOP", value: "SinotticoReq,REQ_STOP"}
            ]}
          />

          <Text>SinotticoReqT</Text>
          <Picker ref={selectSinotticoReqT} onValueChange={(e) => manageEvents("SinotticoReqT", e.currentTarget.value)}
            items={[
              {label: "", value: null},
              {label: "REQT_NO", value: "SinotticoReqT,REQT_NO"},
              {label: "REQT_PRESS", value: "SinotticoReqT,REQT_PRESS"},
              {label: "REQT_GALL", value: "SinotticoReqT,REQT_GALL"},
              {label: "REQT_TEST", value: "SinotticoReqT,REQT_TEST"},
              {label: "REQT_TP", value: "SinotticoReqT,REQT_TP"},
              {label: "REQT_IN", value: "SinotticoReqT,REQT_IN"},
              {label: "REQT_KEY", value: "SinotticoReqT,REQT_KEY"},
            ]}
          />

          <View className="send-data-button-container">
            <Button onClick={(e) => setEvents(waitingEvents)} title="Invia dati">INVIA DATI</Button>
          </View>
        </View>

        <View className={`test-buttons ${(sinotticoName !== 'cea_smart') ? "d-none" : null}`}>
          <Text>SinotticoMains</Text>
          <Picker ref={selectSinotticoMains} onValueChange={(e) => manageEvents("SinotticoMains", e.currentTarget.value)}
            items={[
              {label: "", value: null},
              {label: "MAINS_ABS", value: "SinotticoMains,MAINS_ABS"},
              {label: "MAINS_PRES", value: "SinotticoMains,MAINS_PRES"},
              {label: "MAINS_ANOM", value: "SinotticoMains,MAINS_ANOM"},
              {label: "MAINS_WAIT", value: "SinotticoMains,MAINS_WAIT"},
            ]}
          />

          <Text>SinotticoMotor</Text>
          <Picker ref={selectSinotticoMotor} onValueChange={(e) => manageEvents("SinotticoMotor", e.currentTarget.value)}
            items={[
              {label: "", value: null},
              {label: "MOTOR_OFF", value: "SinotticoMotor,MOTOR_OFF"},
              {label: "MOTOR_ON", value: "SinotticoMotor,MOTOR_ON"}
            ]}
          />

          <Text>SinotticoEP</Text>
          <Picker ref={selectSinotticoEP} onValueChange={(e) => manageEvents("SinotticoEP", e.currentTarget.value)}
            items={[
              {label: "", value: null},
              {label: "EP_OFF", value: "SinotticoEP,EP_OFF"},
              {label: "EP_ON", value: "SinotticoEP,EP_ON"}
            ]}
          />
        </View>

        <View className={`test-buttons ${(sinotticoName !== 'c_smart') ? "d-none" : null}`}>
          <Text>SinotticoBattA</Text>
          <Picker ref={selectSinotticoBattA} onValueChange={e => manageEvents("SinotticoBattA", e.currentTarget.value)}
            items={[
              {label: "", value: null},
              {label: "BATT_ABS", value: "SinotticoBattA,BATT_ABS"},
              {label: "MODE_PRESS", value: "SinotticoBattA,MODE_PRESS"},
              {label: "MODE_ANOM", value: "SinotticoBattA,MODE_ANOM"},
            ]}
          />

          <Text>SinotticoBattB</Text>
          <Picker ref={selectSinotticoBattB} onValueChange={e => manageEvents("SinotticoBattB", e.currentTarget.value)}
            items={[
              {label: "", value: null},
              {label: "BATT_ABS", value: "SinotticoBattB,BATT_ABS"},
              {label: "MODE_PRESS", value: "SinotticoBattB,MODE_PRESS"},
              {label: "MODE_ANOM", value: "SinotticoBattB,MODE_ANOM"},
            ]}
          />

          <Text>SinotticoCBA</Text>
          <Picker ref={selectSinotticoCBA} onValueChange={e => manageEvents("SinotticoCBA", e.currentTarget.value)}
            items={[
              {label: "", value: null},
              {label: "CB_ABS", value: "SinotticoCBA,CB_ABS"},
              {label: "CB_PRESS", value: "SinotticoCBA,CB_PRESS"},
              {label: "CB_ANOM", value: "SinotticoCBA,CB_ANOM"},
            ]}
          />

          <Text>SinotticoCBB</Text>
          <Picker ref={selectSinotticoCBB} onValueChange={e => manageEvents("SinotticoCBB", e.currentTarget.value)}
            items={[
              {label: "", value: null},
              {label: "CB_ABS", value: "SinotticoCBB,CB_ABS"},
              {label: "CB_PRESS", value: "SinotticoCBB,CB_PRESS"},
              {label: "CB_ANOM", value: "SinotticoCBB,CB_ANOM"},
            ]}
          />

          <Text>SinotticoEngineProt</Text>
          <Picker ref={selectSinotticoEngineProt} onValueChange={e => manageEvents("SinotticoEngineProt", e.currentTarget.value)}
            items={[
              {label: "", value: null},
              {label: "ENGINEPROT_ON", value: "SinotticoEngineProt,ENGINEPROT_ON"},
              {label: "ENGINEPROT_OFF", value: "SinotticoEngineProt,ENGINEPROT_OFF"}
            ]}
          />

          <Text>SinotticoEngine</Text>
          <Picker ref={selectSinotticoEngine} onValueChange={e => manageEvents("SinotticoEngine", e.currentTarget.value)}
            items={[
              {label: "", value: null},
              {label: "ENGINE_ON", value: "SinotticoEngine,ENGINE_ON"},
              {label: "ENGINE_OFF", value: "SinotticoEngine,ENGINE_OFF"}
            ]}
          />

          <Text>SinotticoReteA</Text>
          <Picker ref={selectSinotticoReteA} onValueChange={e => manageEvents("SinotticoReteA", e.currentTarget.value)}
            items={[
              {label: "", value: null},
              {label: "CBRETE_ABS", value: "SinotticoReteA,CBRETE_ABS"},
              {label: "CBRETE_OK", value: "SinotticoReteA,CBRETE_OK"},
              {label: "CBRETE_UNPL", value: "SinotticoReteA,CBRETE_UNPL"}
            ]}
          />

          <Text>SinotticoReteB</Text>
          <Picker ref={selectSinotticoReteB} onValueChange={e => manageEvents("SinotticoReteB", e.currentTarget.value)}
            items={[
              {label: "", value: null},
              {label: "CBRETE_ABS", value: "SinotticoReteB,CBRETE_ABS"},
              {label: "CBRETE_OK", value: "SinotticoReteB,CBRETE_OK"},
              {label: "CBRETE_UNPL", value: "SinotticoReteB,CBRETE_UNPL"}
            ]}
          />

          <Text>SinotticoTraliccio</Text>
          <Picker ref={selectSinotticoTraliccio} onValueChange={e => manageEvents("SinotticoTraliccio", e.currentTarget.value)}
            items={[
              {label: "", value: null},
              {label: "TRALICCIO_NO", value: "SinotticoTraliccio,TRALICCIO_NO"},
              {label: "TRALICCIO_YES", value: "SinotticoTraliccio,TRALICCIO_YES"}
            ]}
          />*/}
  {/*}</View>


      </View>
    </View>*/
