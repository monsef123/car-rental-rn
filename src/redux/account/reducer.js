
import { LOGIN } from "./types";

const initialState = {
	isLogged: false
}

const RootReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return { ...state, isLogged: true }
		default:
			return state;
	}
}

export default RootReducer