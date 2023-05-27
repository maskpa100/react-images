
const ORIENTATIONS_STATE = 'ORIENTATIONS_STATE';
const ORIENTATIONS_VALUE = 'ORIENTATIONS_VALUE';
const OPTION_STATE = 'OPTION_STATE';
const OPTION_VALUE = 'OPTION_VALUE';

let initialState = {

    orientationsState: false,
    orientationsValue: "any",
    optionState : false,
    optionValue : "any",
    images: [
        { id: "1", extensions: "jpg", login: "maskpa100", keywords: "природа", img_height: "675", img_width: "1080", date: "1681920838" },
        { id: "2", extensions: "jpg", login: "maskpa100", keywords: "кот", img_height: "500", img_width: "1000", date: "1681920864" }
    ]
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
        default:
            return state;
    }
}

export const funOrientationsState = () => ({type: ORIENTATIONS_STATE})
export const funOrientationsValue = (body) => ({type: ORIENTATIONS_VALUE, body: body})
export const funOptionState = () => ({type: OPTION_STATE})
export const funOptionValue = (body) => ({type: OPTION_VALUE, body: body})

export default searchReducer;