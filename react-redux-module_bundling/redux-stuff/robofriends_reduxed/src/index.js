import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux'
// import { robots } from './robots';
import reportWebVitals from './reportWebVitals';
import 'tachyons'

import App from './containers/App.js';
import { searchRobots } from './reducers';

const store = createStore(searchRobots)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <StrictMode>
    {
      console.log("renderizou index")
    }
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
