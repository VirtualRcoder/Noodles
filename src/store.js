import { combineReducers } from "redux";

const Initializer = [

]

const detailReducer = (state=Initializer, action)=>{
    switch(action.type){
        case "Add":
             action.payload.map((data)=>{
                    state = [...state, data]
            })
            console.log(state)
            return state
        
        default:
            return state
    }
}

export default combineReducers({
    detailReducer
})