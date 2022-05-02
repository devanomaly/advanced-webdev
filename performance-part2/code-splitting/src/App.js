import './App.css';
import { useState } from 'react';

import Page1 from './components/Page1';

const onRouteChange = (setState) => (route) => {
  // with code splitting
  if (route === "page1") setState({route, component:Page1})
  else if (route === "page2") {
    import('./components/Page2').then(Page2 => {
      console.log(Page2)
      setState({ route, component: Page2.default })
    }).catch(err => console.log("Deu ruim", err))
  }
  else {
    import('./components/Page3').then(Page3 => {
      console.log(Page3)
      setState({route, component: Page3.default})
    }).catch(err => console.log("Deu ruim", err))
  }
}

function App() {
  // const [route, setRoute] = useState('page1')

  // without code splitting
  // if (route === 'page1') return <Page1 onRouteChange={setRoute} />;
  // else if (route === 'page2') return <Page2 onRouteChange={setRoute} />;
  // return <Page3 onRouteChange={setRoute} />

  // with code splitting
  const [myState, setState] = useState({ route: "page1", component: Page1 })
  // TODO:>>> SEE ATTACHED "on-dynamic-import.txt"
  if (myState.route === "page1") return <Page1 onRouteChange={onRouteChange(setState)} />;
  else return <myState.component onRouteChange={onRouteChange(setState)} />
}

export default App;
