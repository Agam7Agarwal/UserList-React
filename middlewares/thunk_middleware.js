import {applyMiddleware} from 'redux';

let thunkmiddleware = (store) =>(next) => (action) =>{
    if (typeof(action) === "function"){
        return action(store);
    }
    else{
        return next(action);
    }
};

let middlewares = applyMiddleware(thunkmiddleware);

export default middlewares;