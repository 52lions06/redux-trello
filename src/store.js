import {createStore} from 'redux'

import {trelloReducer} from './reducers';

export default createStore(trelloReducer);

//store is where the react state is kept 

//STORE has 2 objects

//--Object1--getState:  This allows you to view (inspect) the current state 

//--Object2--dispatch:  This allows you to actually run the ACTIONS / modify state through the REDUCERS

//=============================================================================

//------ Add a third list to the state -------
//store.dispatch(actions.addList('Example list 3'));

//------ Add a card to the third list -----
//store.dispatch(actions.addCard('Example card 1', 2));

//------ Logs out the state, with the list and the card added ------
//console.log(store.getState());

//=============================================================================

/*

Dispatching ACTIONS to the STORE is the sole way in which you modify state using REDUX, get familiar with the flow of:

1.  Creating an action

2.  Handling it in a reducer

3.  Triggering it using dispatch

*/