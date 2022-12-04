import { createStore } from "redux";

// redux use for managing the state
// Store globalied state
// Action ( updating input field)
// Reducer ( it see how action transfer 1 state to another)
// Dispatch ( execute the action )

const initialState = {
    inputValue : "  "
}

const reducer = (state=initialState, action) => {

    switch(action.type){
        case "INPUT_CHANGE":
            return Object.assign({}, state, {inputValue : action.text})
            
        default : 
        return state;
    }
}

export default createStore(reducer);