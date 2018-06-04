import {combineReducers} from 'redux';
import usersList from './users';
import userActive from './user-active'

const allReducers = combineReducers({
    users: usersList,
    active: userActive
});

export default allReducers;