import { combineReducers } from 'redux';
import {speakers} from './speakers';
import {sessions} from "./sessions";


export default combineReducers({
    speakers,
    sessions
});