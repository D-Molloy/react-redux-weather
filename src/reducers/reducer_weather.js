import { FETCH_WEATHER } from "../actions/index";

//redux-promise - middleware can stop or manipulate actions before the get to reducers
//redux-promise sees the incoming action (specifically the payload and checks if its a promise), STOPS the action entirely, then when the request finishes (resolves), it dispatches a new action of the same time, but with a payload  of the data we wanted
// Never directly manipulate the array! 
//.concat doesn't change our current state array, it adds it and returns a new array so this is okay - state.concat([action.payload.data]);
// better to use ES6 like below
export default function(state=[], action){
    // console.log("Action received: ", action)
    switch (action.type){
        case FETCH_WEATHER:
        // return [ action.payload.data, ...state]
        // if a city is misspelled, return the orginal state, else, add the new array
        return !action.payload.data ? state : [ action.payload.data, ...state];
    }
    return state;
}