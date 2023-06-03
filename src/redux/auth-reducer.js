import {authAPI} from "../api/api";


const SET_JWT = 'SET_JWT';
const SET_ME = 'SET_ME';
const SET_YES_AUTH = 'SET_YES_AUTH';
const SET_NO_AUTH = 'SET_NO_AUTH';

let initialState = {
    email : null,
	firstname : null,
	id : null,
	lastname : null,
    jwt : null,
    isAuth : null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_JWT:         
            return {
                ...state, jwt : action.body
            };
        case SET_ME:        
            return {
                ...state, email : action.body.email,
                firstname : action.body.firstname, 
                id : action.body.id, 
                lastname : action.body.lastname,
                isAuth : true
            };
        case SET_YES_AUTH:
            return {
                ...state, isAuth : action.body.isAuth,
                email : action.body.data.email,
                firstname : action.body.data.firstname, 
                id : action.body.data.id, 
                lastname : action.body.data.lastname,

            };
        case SET_NO_AUTH:
            return {
                ...state, isAuth : action.body.isAuth
            };
        default:
            return state;
    }
}

export const setJwt = (body) => ({type: SET_JWT, body})
export const setMe = (body) => ({type: SET_ME, body})
export const setYesAuth = (body) => ({type: SET_YES_AUTH, body})
export const setNoAuth = (body) => ({type: SET_NO_AUTH, body})

export const me = (jwt) => {
    return (dispatch) => {
        authAPI.me(jwt)
        .then(data => {
           // dispatch(setMe(data.data));
        });
    }
}
export const login = (values) => {
    return (dispatch) => {
        authAPI.login(values)
        .then(data => {
            // dispatch(setJwt(data.jwt));
            // dispatch(me(data.jwt));

        });
    }
}
export const getAuth = (values) => {
    return (dispatch) => {
        authAPI.getAuth(values)
        .then(data => {
             if(data.isAuth === true){
                dispatch(setYesAuth(data));
             }else{
                dispatch(setNoAuth(data));
             }
        });
    }
}

export default authReducer;