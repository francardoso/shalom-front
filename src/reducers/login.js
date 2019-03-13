import {
    SET_IS_LOGGED
} from '../actions/login';

const initialState = {
    userId: null,
    isLogged: false
};

const loginReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_IS_LOGGED:
        console.log('HERE', action);
            return {
                ...state,
                isLogged: true,
                userId: action.payload.userId
            };
        default:
            return state;
    }
};

export default loginReducer;