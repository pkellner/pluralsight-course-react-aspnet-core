export const SPEAKER_LOAD = 'SPEAKER_LOAD';
export const SPEAKER_LOAD_SUCCESS = 'SPEAKER_LOAD_SUCCESS';
export const SPEAKER_LOAD_FAIL = 'SPEAKER_LOAD_FAIL';

export function speakersFetchData() {
    return {
        type: SPEAKER_LOAD,
        payload: {
            request:{
                url:'http://localhost:4000/rest/speakers'
            }
        }
    }
}
