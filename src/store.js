import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './reducers';

export default function configureStore(initialState) {
    return createStore(
        AppReducer,
        initialState,
        applyMiddleware(thunk)
    );
}
