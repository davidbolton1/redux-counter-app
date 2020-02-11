const redux = require('redux')
const createStore = redux.createStore;

const initalState = {
 counter: 0
}
//Reducer
const rootReducer = (state = initialState, action) => {
    return state;
}
//Store
const store = createStore(rootReducer);
console.log(store.getState())


// Dispatching Action

// Subscription