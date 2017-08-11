import { LOCATION_PUSH } from '../../constants/actionTypes';

export default location => ({
    type: LOCATION_PUSH,
    location,
});
