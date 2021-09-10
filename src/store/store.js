import { createStore } from 'redux';

export const store = createStore(reducer);

initialState = {
    loading: true,
    movies: [],
    search: '',
};
reducer = (state = defaulState, action) => {
    switch ((action, type)) {
        /*тип action
        - запрос на поиск фильма SEARCH_MOVIES_REQUEST
        - удачный поиск SEARCH_MOVIES_SUCCESS
        - неудачный поиск SEARCH_MOVIES_FAILURE
        */
        case 'SEARCH_MOVIES_REQUEST':
            /*как action изменяет состояние*/
            return {
                ...state,
                loading: true,
            };
        case 'SEARCH_MOVIES_SUCCESS':
            /*как action изменяет состояние*/
            return {
                ...state,
                loading: false,
                movies: action.payload,
            };
        case 'SEARCH_MOVIES_FAILURE':
            /*как action изменяет состояние*/
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
