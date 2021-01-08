const initialState ={
    products :[],// todos los productos para tienda
    detailProduct:[], 
    productSearch:[],// los productos que se buscan
    productCart: [],
    categories:[],
    loggedIn: false,
    user:{},
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
        case 'SET_LOGIN':
            return {
                ...state, 
                loggedIn: true, 
                user:action.payload
            };
        case 'SET_LOGOUT':
            return {
                ...state, 
                loggedIn: false, 
                user:{}
            };
        case "ADDPRODUCT_CART":
            return {
              ...state,
              productCart: state.productCart.concat(action.payload)
            };
            // cree el reducer para el detalle del producto
            case "DETAIL_PRODUCT":
                return {
                  ...state,
                  detailProduct: action.payload
                };
        case "GET_CATEGORY" :
            return{
                ...state,
              categories : action.payload
            };
        case "INCREMENT" :
            return {
                ...state,
                count : state.count + 1
            
        };
        case "DECREMENT":
            return {
                ...state,
                count: state.count -1
            
        };
        case "CLEAN_CART":
            return {
                productCart:[]
            }
        case "REMOVE_ITEM_CART":
            return {
                productCart : state.productCart.filter(p => p.id !== action.payload.id)
            }
        default: return state
    }
}
export default rootReducer