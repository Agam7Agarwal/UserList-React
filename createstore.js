import {createStore,compose} from 'redux';
import reducers from './reducers/userReducer'
import middlewares from './middlewares/thunk_middleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(middlewares));

export default store;