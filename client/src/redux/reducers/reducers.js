const initialState ={
    products :[],// todos los productos para tienda
    productsDetail:[], 
    productSearch:[],// los productos que se buscan
    productCart: [],
    categories:[],
     count : 0
}

function rootReducer (state = initialState,action){
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
        case "ADDPRODUCT_CART":
            return {
              ...state,
              productCart: state.productCart.concat(action.payload)
            };
        case "GET_CATEGORY" :
            return{
                ...state,
              categories : action.payload
            };
        case "INCREMENT" :{
            return {
                ...state,
                count : state.count + 1
            }
        };
        case "DECREMENT":{
            return {
                ...state,
                count: state.count -1
            }
        };

        default: return state
    }
}
export default rootReducer