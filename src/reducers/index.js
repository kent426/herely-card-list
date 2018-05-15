import { combineReducers } from 'redux';
import WorkingSpacesReducer from './reduce_working_spaces';

const rootReducer = combineReducers({
    workingspaces: WorkingSpacesReducer

});
  
export default rootReducer;