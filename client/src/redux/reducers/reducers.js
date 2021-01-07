const initialState ={
    products :[],// todos los productos para tienda
    detailProduct:[], 
    productSearch:[],// los productos que se buscan
    productCart: [],
    categories:[]
}

function rootReducer (state = initialState,action){
    switch(action.type){
        case "SEARCH_PRODUCTS":
            return {
                ...state,
                productSearch : action.payload
            };
        case "SEARCH_PRODUCTS_BY_DESCRIPTION":{
            return {
                ...state,
                productSearch: action.payload
        }
    }
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
            }

        default: return state
    }
}
export default rootReducer