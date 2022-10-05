export function categoryReducer(state=null , action){
    switch(action.type){
        case "CATEGORY_SELECTED" :
            return action.payload
        default :
            return state ;
    }
} 

export function mediumReducer(state=null , action){
    switch(action.type){
        case "MEDIUM_SELECTED" :
            return action.payload
        default :
            return state ;
    }
} 
