import { BOOK_FAILURE, BOOK_REQUEST, GET_BOOK_SUCCESS, PATCH_BOOK_SUCCESS } from "./actionTypes"

const initialstate = {
    isLoading: false,
    isError: false,
    books: [],
}

export const reducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case BOOK_REQUEST:
            return { ...state, isLoading: true }
        case GET_BOOK_SUCCESS:
            return { ...state, isLoading: false, books: payload };
        case BOOK_FAILURE:
            return { ...state, isError: true };
        case PATCH_BOOK_SUCCESS:
            return { ...state, isLoading: false  }
        default:
            return state
    }
}