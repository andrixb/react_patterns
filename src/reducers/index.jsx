import { combineReducers } from 'redux';
import JSONRenderReducer from './jsonrender.reducer';

const rootReducer = combineReducers({
    // state: (state = {}) => state,
    jsonRender: JSONRenderReducer,
});

export default rootReducer;
