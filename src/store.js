import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import ReduxThunk from 'redux-thunk';

//const logger = createLogger();

//const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger, ReduxThunk));
const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default store;
