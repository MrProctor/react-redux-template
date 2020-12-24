import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootMiddleware from './middlewares';
import { currentUserReducer } from './common/reducers';

const nodeEnv = process.env.NODE_ENV;

const composeEnhancers = (
  nodeEnv !== 'production'
  && typeof window !== 'undefined'
  // eslint-disable-next-line no-undef
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const middleware = nodeEnv !== 'production' ? [...rootMiddleware, createLogger()] : rootMiddleware;

const reducer = combineReducers({
  common: currentUserReducer,
});

const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(...middleware, thunk)),
);

export default store;
