import { AWARDS } from '../shared/awards';
import * as ActionTypes from './ActionTypes';

export const Awards = (state = AWARDS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_AWARDS:
            const award = action.payload;
            award.id = state.length;
            award.date = new Date().toISOString();
            return state.concat(award);
        default:
            return state;
    }
};