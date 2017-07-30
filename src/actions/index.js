//These are action creator functions not simple individual actions
//Simple actions are OBJECTS with properties listed out inside of it with the ACTION TYPE and action payloads below it 
//---To Call---
//const action = addCard or addList(argument, argument)
export const ADD_LIST = 'ADD_LIST';
export const addList = title => ({
    type: ADD_LIST,
    title
});

export const ADD_CARD = 'ADD_CARD';
export const addCard = (text, listIndex) => ({
    type: ADD_CARD,
    text,
    listIndex
});


//actions are the first step in React
//actions are used to dispatch the want to change the state
//actions always have a TYPE: that are used to mention what is being changed - TYPE indicates what is actually being carried out 
//TYPES have their own seperate const
//everything else with the action is the actions payload...in this case above there is TITLE, TEXT, and LIST INDEX