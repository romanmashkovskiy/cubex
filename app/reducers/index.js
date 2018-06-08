import {combineReducers} from 'redux';
import active from './contact-active'
import filtered from './contacts'

const allReducers = combineReducers({
    active: active,
    filtered: filtered
});

export default allReducers;