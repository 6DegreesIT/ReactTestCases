import { createStore, applyMiddleware } from 'redux';
import rootReducer from './index';
import ReduxThunk from 'redux-thunk';

export const middleware = [ReduxThunk];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default createStoreWithMiddleware(rootReducer);
