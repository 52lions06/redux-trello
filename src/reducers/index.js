//Reducers are actually MODIFYING the application state after receiving the ACTION that needs to be handled 
//Reducers are functions with 2 arguments 
//--Argument1--
//The current state 
//--Arguement2--
//The specific action you want to take 

//Every time there is a NEW action, the REDUCER will run 
import * as actions from '../actions';

const initialState = {
    lists: [{
        title: 'Example list 1',
        cards: [{
            text: 'Example card 1'
        }, {
            text: 'Example card 2'
        }]
    }, {
        title: 'Example list 2',
        cards: [{
            text: 'Example card 1'
        }, {
            text: 'Example card 2'
        }]
    }]
};

export const trelloReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_LIST) {
        return Object.assign({}, state, {       //Object.assign({}, state, newState)   
            lists: [...state.lists, {           // --1st argument--  It creates a new object
                title: action.title,            // --2nd argument--  It then copies over all of the properties of STATE
                cards: []                       // --3rd argument--  It then copies over all of the properties of newState
            }]
        });
    }
    else if (action.type === actions.ADD_CARD) {
        let lists = state.lists.map((list, index) => {
            if (index !== action.listIndex) {
                return list;
            }
            return Object.assign({}, list, {
                cards: [...list.cards, {
                    text: action.text
                }]
            });
        });

        return Object.assign({}, state, {
            lists
        });
    }
    return state;
};

//Reducers are used to actually change the state 

//EVERY Reducer has the same setup
/* 

export const Reducer = (state=initialState, action) => {
    if (action.type === actions.whaterverTYPEIsFromTheAction1) {
        ...
        return newState;                                               <----New STATE BASED OFF OF THE ACITON
    }
    else if (action.type === actions.whaterverTYPEIsFromTheAction2) {
        ...
        return newState;                                                <----New STATE BASED OFF OF THE ACITON
    }
    return state; <---THE UNMODIFIED STATE******
};

*/