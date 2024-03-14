import ElcosAnimation from './lib/ElcosAnimation.js';

export default function Animation({
                            events = [],
                            sinotticoName = 'cea_smart'
                          }) {
  return <ElcosAnimation events={events} sinotticoName={sinotticoName} />
}
