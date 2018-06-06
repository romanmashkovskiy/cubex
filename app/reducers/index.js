import {combineReducers} from 'redux';
import users from './users';
import active from './user-active'
import filtered from './search-plugin'

const allReducers = combineReducers({
    active: active,
    filtered: filtered
});

export default allReducers;