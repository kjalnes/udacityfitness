export const RECEIVE_ENTIRES = 'RECEIVE_ENTIRES';
export const ADD_ENTRY = 'ADD_ENTRY';

export function receiveEntries(entries) {
    // console.log('entries in action', entries)
    return {
        type: RECEIVE_ENTIRES,
        entries
    }
}

export function addEntry(entry) {
    return {
        type: ADD_ENTRY,
        entry
    }
}
