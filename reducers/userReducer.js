import {combineReducers} from 'redux';

let InitialState = {
    users: [],
    loader: false,
};

function fetchUserList(state, { userlist }) {
    return {...state , users: [...userlist.userlist], loader: false };
}

function updateUserDetails(state, { changedobj }) {
    return { ...state , users: changedobj};
}

let reducers = (state = InitialState , action) => {
    switch(action.type){
        case 'FETCH_USER_STARTED': {
            return { ...state , loader: true};
        }
        case 'FETCH_USER_SUCCESS' : return fetchUserList(state, action);
        case 'FETCH_USER_FAILURE' : {
            return { ...state , loader:false };
        }
        case 'SAVE_CHANGES' : return updateUserDetails(state, action);
        default:
            return state;
    }
};

export default reducers;