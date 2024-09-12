import {ADD_To_Cart} from '../constants'
const initialState = {
    cardData:[]
}
export default function cardItem(state=initialState,action) {
    switch(action.type){
        case ADD_To_Cart:
            return{
                ...state,
                cardData:action.data
            }
            break;
            default:
                return state
    }

}