export const SESSION_LOAD = 'SESSION_LOAD';
export const SESSION_LOAD_SUCCESS = 'SESSION_LOAD_SUCCESS';
export const SESSION_LOAD_FAIL = 'SESSION_LOAD_FAIL';

export const SESSION_UPDATE = 'SESSION_UPDATE';
export const SESSION_UPDATE_SUCCESS = 'SESSION_UPDATE_SUCCESS';
export const SESSION_UPDATE_FAIL = 'SESSION_UPDATE_FAIL';

export function sessionsFetchData() {
    console.log("actions/sessions.js/sessionsFetchData SESSION_LOAD....");
    //debugger;
    return {
        type: SESSION_LOAD,
        payload: {
            request:{
                url:'http://localhost:4000/rest/sessions'
            }
        }
    }
}


export function updateSession(sessionRec) {
    //debugger;
    return {
        type: SESSION_UPDATE,
        payload: {
            request: {
                method: 'PUT', // UPDATE RECORD
                url: 'http://localhost:4000/rest/sessions/' + sessionRec.id,
                data: {
                    ...sessionRec
                }
            }
        }
    }
}

