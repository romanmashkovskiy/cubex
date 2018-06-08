import {combineReducers} from 'redux';
import active from './contact-active'
import filtered from './contacts'
import addMode from './add-mode'


const allReducers = combineReducers({
    active: active,
    filtered: filtered,
    addMode: addMode
});

export default allReducers;