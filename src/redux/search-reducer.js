import {searchAPI} from "../api/api";
const ORIENTATIONS_STATE = 'ORIENTATIONS_STATE';
const ORIENTATIONS_VALUE = 'ORIENTATIONS_VALUE';
const OPTION_STATE = 'OPTION_STATE';
const OPTION_VALUE = 'OPTION_VALUE';
const SET_IMAGES = 'SET_IMAGES';
const GET_WORDS = 'GET_WORDS';

let initialState = {

    orientationsState: false,
    orientationsValue: "any",
    optionState : false,
    optionValue : "any",
    words : "",
    images: [ ],
    totalCount: 0
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORIENTATIONS_STATE:         
            return {
                ...state,
                orientationsState: state.orientationsState ?  false :  true
            };
        case ORIENTATIONS_VALUE:         
            return {
                ...state,
                orientationsValue: action.body,
                orientationsState: false
            };
        case SET_IMAGES: {
            return { ...state, images: action.data.images, totalCount: action.data.totalCount  }
        }
        case OPTION_STATE:         
            return {
                ...state,
                optionState: state.optionState ?  false :  true
            };
        case OPTION_VALUE:         
            return {
                ...state,
                optionValue: action.body,
                optionState: false
            };
        case GET_WORDS:         
            return {
                ...state,
                words: action.words
            };
        default:
            return state;
    }
}

export const funOrientationsState = () => ({type: ORIENTATIONS_STATE})
export const funOrientationsValue = (body) => ({type: ORIENTATIONS_VALUE, body: body})
export const funOptionState = () => ({type: OPTION_STATE})
export const funOptionValue = (body) => ({type: OPTION_VALUE, body: body})
export const setImages = (data) =>  ({type: SET_IMAGES ,data})
export const getWords = (words) => ({type: GET_WORDS ,words})
 

export const getImages = (page,count,words,format,orientations) => {
    return (dispatch) => {
        searchAPI.getImages(page,count,words,format,orientations)
        .then(data => {
            dispatch(setImages(data));
        });
    }
}




export default searchReducer;