import {createStore, combineReducers} from 'redux';
import { Products } from './products';
import { Skills } from './skills';
import { Awards } from './awards';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: Products,
            skills: Skills,
            awards: Awards
        })
    );
    return store;
}