import { combineReducers } from 'redux';
import * as globalReducers from './redux/reducers';

const appReducer = combineReducers({...globalReducers});

export default appReducer;