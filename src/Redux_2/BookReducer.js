import { buy_book } from "./Booktypes"


const initialState = {
    No_of_book: 20,
}

const BookReducer = (state = initialState, action) => {
    switch (action.type) {
        case buy_book: return {
            ...state, No_of_book: state.initialState - 1,
        }
        default: return state;
    }
}
export default BookReducer;