import * as actionTypes from './actions';

const initialState = {
    heroHP: 100,
    bossHP: 100,
    results: []
}


const reducer = (state = initialState, action) => {

    switch ( action.type ){


// On-Hero Actions ====================================>    
        case actionTypes.HIT:
            return {
                ...state,
                bossHP: state.bossHP - action.heroHit,
                heroHP: state.heroHP - action.enemyHit
            }
        case actionTypes.PUNCH:
            return {
                ...state,
                bossHP: state.bossHP - action.heroPunch,
                heroHP: state.heroHP - action.enemyHit
            }
        case actionTypes.HEAL: 
            return {
                ...state,
                heroHP: state.heroHP + action.heroHeal - action.enemyHit
            }
        case actionTypes.KILL:
            return {
                ...state,
                bossHP: state.bossHP * 0,
                heroHP: state.heroHP * 0
            }



// Store result ====================================>    

        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date() * Math.random(), val: state.heroHP})
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