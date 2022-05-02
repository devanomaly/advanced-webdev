import './App.css';
import { useState } from 'react';

import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {
  const [route, setRoute] = useState('page1')
  if (route === 'page1') return <Page1 onRouteChange={setRoute} />;
  else if (route === 'page2') return <Page2 onRouteChange={setRoute} />;
  return <Page3 onRouteChange={setRoute} />
}

export default App;
