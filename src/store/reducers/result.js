import * as actionTypes from '../actions'

const initialState = {
    //counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
                //use concat to return new array instead of push
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
