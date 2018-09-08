import { SESSION_LOAD,SESSION_LOAD_FAIL,SESSION_LOAD_SUCCESS,
    SESSION_UPDATE,
    SESSION_UPDATE_FAIL,
    SESSION_UPDATE_SUCCESS   } from "../actions/sessions";

import {STATUS_ERROR, STATUS_SAVING} from "../../ClientApp/Components/common/SessionButton";


export function sessions(state = {
                             data: [],
                             isLoading: true,
                             hasErrored: false,
                             errorMessage: ""
                         },
                         action) {
    function updateOneSession(state, sessionIdToUpdate, newInterestLevel) {
        // STILL PROBLEM WITH DATE, fails because newState nested nested data still references old state
        // let newState = Object.assign({}, state);
        // let newData = [];
        // newState.data.map(function(rec){
        //     if (rec.id === sessionIdToUpdate) {
        //         rec.interestLevel = newInterestLevel;
        //         newData.push(rec);
        //     } else {
        //         newData.push(rec);
        //     }
        // });
        // newState.data = newData;
        // return newState;

        // THIS WORKS
        return {
            ...state,
            data: state.data.map((rec) => {
                    return rec.id === sessionIdToUpdate ?
                        {...rec, interestLevel: newInterestLevel} : rec
                }
            )
        };
    }
    switch (action.type) {
        case SESSION_LOAD: {
            return Object.assign({}, state, {
                isLoading: true,
                hasErrored: false
            });
        }
        case SESSION_LOAD_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload.data,
                isLoading: false,
                hasErrored: false
            });
        }
        case SESSION_LOAD_FAIL: {
            return Object.assign({}, state, {
                isLoading: false,
                hasErrored: true,
                errorMessage: action.error.message
            });
        }

        ///////////// SESSION_UPDATE* (PUT) /////////////////////////////////////////////////////////////////
        case SESSION_UPDATE: {
            const sessionIdToUpdate = action.payload.request.data.id;
            const newInterestLevel = STATUS_SAVING;

            const newState = updateOneSession(
                state,sessionIdToUpdate,newInterestLevel);
            return newState;
        }
        case SESSION_UPDATE_SUCCESS: {
            const sessionIdToUpdate = action.payload.data.id;
            const newInterestLevel = action.payload.data.interestLevel;
            const newState = updateOneSession(
                state,sessionIdToUpdate,newInterestLevel);
            return newState;
        }
        case SESSION_UPDATE_FAIL: {
            const sessionIdToUpdate =
                action.meta.previousAction.payload.request.data.id;
            const newInterestLevel = STATUS_ERROR;
            const newState = updateOneSession(
                state,sessionIdToUpdate,newInterestLevel);
            return newState;
        }
        default:
            return state;
    }
}
