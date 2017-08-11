import {
    LOCATION_SET, LOCATION_PUSH, LOCATION_REPLACE, LOCATION_GO_BACK,
} from '../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case LOCATION_SET:
            return action.location;

        case LOCATION_PUSH:
        case LOCATION_REPLACE:
        case LOCATION_GO_BACK:
        default:
            return state;
    }
};
