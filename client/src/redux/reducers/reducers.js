const initialState ={
    products :[],// todos los productos para tienda
    productsDetail:[], 
    productSearch:[],// los productos que se buscan
}

export default function rootReducer (state = initialState,action){
    switch(action.type){
        case "SEARCH_PRODUCTS":
            return {
                ...state,
                productSearch : action.payload
                
            };
        case "GET_PRODUCTS":
            return {
              ...state,
              products: action.payload
            
        };
        default: return state
    }
}
