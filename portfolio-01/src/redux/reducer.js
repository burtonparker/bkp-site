import { PRODUCTS } from '../shared/products';
import { SKILLS } from '../shared/skills';
import { AWARDS } from '../shared/awards';

export const initialState = {
    products: PRODUCTS,
    skills: SKILLS,
    awards: AWARDS
};

export const Reducer = (state = initialState, action) => {
    return state;
};