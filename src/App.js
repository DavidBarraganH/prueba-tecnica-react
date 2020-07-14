import React, {useEffect, Fragment}  from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import Layout from './components/Layout';
import { getMenus } from './actions/userAction';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const App = () => {
  useEffect(() => {
      store.dispatch(getMenus());
  }, []);
  return (
      <Provider store={store}>
      <Fragment>
          
          <div className="container">
            <Layout/>
          </div>
      </Fragment>
      </Provider>
  );
}

export default App;
 