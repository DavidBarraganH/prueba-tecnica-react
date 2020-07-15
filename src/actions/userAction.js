import axios from 'axios';

import  {GET_MENU, ADD_USER, POST_ERROR} from "./types";

export const getMenus = () => async dispatch => 
{
    try {
        const res = await axios.get('https://tecnical-api.herokuapp.com/api/options');
        dispatch({
            type:GET_MENU,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{
                msg: err.response.data,
                status: err.response.status,
            }
        })
    }
}

export const addUser = formData => async dispatch => {
    const config = {
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    };
    try {
        const res = await axios.post("https://cors-anywhere.herokuapp.com/https://tecnical-api.herokuapp.com/api/users", formData, config);
        dispatch({
            type: ADD_USER,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {
                msg:  "Ha ocurrido un error.",
                status: 300,
            }
        });
    }

}