const initialState ={
    products :[],// todos los productos para tienda
    reviews : [],
    detailProduct:[], // estado para mostrar los detalles del producto(ver mas)
    productSearch:[],// los productos que se buscan
    productCart: [],// los productos que agregan al cart
    categories:[],// las categorias del producto que se crean en admin2
    auth: {loggedIn:false},// autenticacion de usuario
    count : 0,
    order: [],
    user:{},// el usuario registrado en el momento
    users:[], // todos los usarios de la base de datos
    count : 0
}

function rootReducer (state = initialState, action){
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

        case "GET_REVIEWS":
            return {
              ...state,
              reviews: action.payload
            };
        case "SET_USER":
            return {
              ...state,
              loggedIn: true,
              user: action.payload
            };

        case 'SET_LOGIN':
            return {
                ...state, 
                auth: {
                    loggedIn: true, 
                    user:action.payload
                }
                
            };
        case 'SET_LOGOUT':
            return {
                ...state, 
                auth:{
                    loggedIn: false, 
                    user:{}
                },
                user:{},
                loggedIn: false
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

            case "PRODUCT_ID":
                return{
                    ...state,
                    detailProduct: action.payload
                }

        case "GET_CATEGORY" :
            return{
                ...state,
              categories : action.payload
            };
            case "GET_ORDER":
                return {
                  ...state,
                  order: action.payload
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
                ...state,
                productCart:[]
            }
        case "REMOVE_ITEM_CART":
            return {
                ...state,
                productCart : state.productCart.filter(p => p.id !== action.payload.id)
            }
        case "GET_USERS":
            return {
                ...state,
                users : action.payload
            }
        default: return state
    }
}
export default rootReducer