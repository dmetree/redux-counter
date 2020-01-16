import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}


const reducer = (state = initialState, action) => {

    switch ( action.type ){
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.INC: 
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.DEC:
            return {
                ...state,
                counter: state.counter - action.val
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), val: state.counter})
                // concat() \\ new array = oldArray + newEl 
            }
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            } 
        
        default:
            return state; 
    }
    // return state;
}

export default reducer;