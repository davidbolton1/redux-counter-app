import * as actionTypes from './actions'

const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			return {
                ...state,
				counter: state.counter + 1
			};
		case actionTypes.DECREMENT:
			return {
                ...state,
				counter: state.counter - 1
			};
		case actionTypes.ADD:
			return {
                ...state,
				counter: state.counter + action.value
			};
		case actionTypes.SUBTRACT:
			return {
                ...state,
				counter: state.counter - action.value
            };
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
                //use concat to return new array instead of push
                //new u id node version 4
                //immutable JS
            };
        case actionTypes.DELETE_RESULT:
            //const newArray = [...state.results]
            //const updatedArray = state.results.filter((result, index) => index !== id);
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            // Returns true for all elements where the id is not equal to the id passed with the action
        return {
            ...state,
            results: updatedArray
        }
	}

	return state;
};

export default reducer;
