import { createStore } from 'redux'
import RootReducer from "./account/reducer";



const store = createStore(RootReducer)

export default store;