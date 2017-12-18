import { ADD_ENTRY, RECEICE_ENTRIES } from '../actions';

function entries(state={}, action) {
    // console.log('action:', action)
    switch (action.type) {
        case RECEICE_ENTRIES :
            // console.log('entries in reducer', entries)
            return {
                ...state,
                ...action.entries
            }
        case ADD_ENTRY :
            return {
                ...state,
                ...action.entry
            }
        default :
            return state
    }
}

export default entries;
