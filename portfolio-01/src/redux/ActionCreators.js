import * as ActionTypes from './ActionTypes';

export const addAwards = (id, text) => ({
    type: ActionTypes.ADD_AWARDS,
    payload: {
        id: id,
        text: text
    }
});