import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundry from './components/error-boundry/error-boundry';
import FoodifyApi from './api/foodify-api';
import FoodifyApiContext from './components/foodify-api-context/foodify-api-context';
import { store } from './store';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <FoodifyApiContext.Provider value={FoodifyApi}>
        <Router>
          <App />
        </Router>
      </FoodifyApiContext.Provider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
