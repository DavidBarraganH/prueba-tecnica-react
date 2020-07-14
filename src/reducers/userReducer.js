import {GET_MENU, POST_ERROR, ADD_USER} from '../actions/types';

const dataInicial = {
    menus: [],
    error:{},
    loading:false,
}

export default function (state = dataInicial, action) {
    
    const {type, payload} = action;

    switch(type) {
        case GET_MENU:
            return {
                ...state,
                menus:payload,
                loading:false
            };
        case ADD_USER:
            return {
                ...state,
                error:payload,
                loading:true
            };

        default:
            return state;
        }
}

