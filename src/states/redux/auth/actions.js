import { API_BASE_URL } from '../../../config/serverApiConfig';
import * as actionTypes from './types';
import axios from 'axios'
// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();

export const register = ({registerData}) => async(dispatch) => {
    console.log(registerData)
    const response = axios.post(API_BASE_URL + 'auth/register',registerData);

}