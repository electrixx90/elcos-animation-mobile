import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Button, View, Text} from "react-native";
import SinotticoSimulator from "./SinotticoSimulator";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello World</Text>

      <Button
        title="Go to Simulator"
        onPress={() => navigation.navigate('SinotticoSimulator')}
      />
    </View>
  );
}

function FooPage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Foo Page</Text>
      <Button
        title="Move back to Simulator"
        onPress={() => navigation.navigate('SinotticoSimulator')}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SinotticoSimulator" component={SinotticoSimulator} />
        <Stack.Screen name="FooPage" component={FooPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


