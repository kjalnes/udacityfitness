import { ADD_ENTRY, RECEICE_ENTRIES } from '../actions';

function entries(state={}, action) {
    switch (action.type) {
        case RECEICE_ENTRIES :
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
