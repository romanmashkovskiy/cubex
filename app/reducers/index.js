import {combineReducers} from 'redux';
import active from './contact-active'
import contacts from './contacts'
import addMode from './add-mode'


const allReducers = combineReducers({
    active: active,
    contacts: contacts,
    addMode: addMode
});

export default allReducers;