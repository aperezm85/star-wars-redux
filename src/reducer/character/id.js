import { SET_CURRENT_CHARACTER } from './actions';

const initialState = 0;

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_CHARACTER:
            action.id;
        default:
            return state;
    }
}