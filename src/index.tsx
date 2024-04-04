import ElcosAnimation from './lib/ElcosAnimation.js';
import {NavigationContainer} from "@react-navigation/native";

export default function Animation({
                            events = [],
                            sinotticoName = 'cea_smart'
                          }) {
  return <NavigationContainer><ElcosAnimation events={events} sinotticoName={sinotticoName} /></NavigationContainer>
}
