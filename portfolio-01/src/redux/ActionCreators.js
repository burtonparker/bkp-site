import * as ActionTypes from './ActionTypes';

export const addProducts = (id, name, image) => ({
    type: ActionTypes.ADD_PRODUCTS,
    payload: {
        id: id,
        name: name,
        image: image
    }
});