const initialState ={
    products :[],// todos los productos para tienda
    detailProduct:[], // estado para mostrar los detalles del producto(ver mas)
    productSearch:[],// los productos que se buscan
    productCart: [],// los productos que agregan al cart
    categories:[],// las categorias del producto que se crean en admin2
    loggedIn: false,// autenticacion de usuario
    user:{},// el usuario
    count : 0
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
              productCart: action.payload
            };
        case "REMOVEPRODUCT_CART":
            return {
              ...state,
              productCart: action.payload
            };
        case "REMOVEALLPRODUCT_CART":
            return {
              ...state,
              productCart: action.payload
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