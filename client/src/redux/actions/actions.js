export function searchProducts(product) {
    return function(dispatch) {
      return fetch(`http://localhost:3001/products/search/search?name=${product}`)
        .then(response => response.json())
        .then(json => {
          dispatch({
            type: "SEARCH_PRODUCTS",
            payload: json
          });
        });
    };
  }

  export function searchProductsByDescription(product) {
    return function(dispatch) {
      return fetch(`http://localhost:3001/products/search/search?description=${product}`)
        .then(response => response.json())
        .then(json => {
          dispatch({
            type: "SEARCH_PRODUCTS_BY_DESCRIPTION",
            payload: json
          });
        });
    };
  }


  export function getProducts (){
    return function(dispatch){
      return fetch(`http://localhost:3001/products`)
      .then(response => response.json())
      .then(json =>{
        dispatch({
          type: "GET_PRODUCTS",
          payload:json
        })
      })
    }
  }
 
  export function addProductCart(payload){
    return {
      type : "ADDPRODUCT_CART",
      payload
    }
  }
// se creo un action para el detalle del producto
  export function DetailProduct (payload){
    return {
      type : "DETAIL_PRODUCT",
      payload
    }
  }
  

  export function getCategory (){
    return function(dispatch){
      return fetch(`http://localhost:3001/products/category`)
      .then(response => response.json())
      .then(json =>{
        dispatch({
          type: "GET_CATEGORY",
          payload:json
        })
      })
    }
  }

  export function increment (){
    return{
      type: "INCREMENT"
    }
  }

  export function decrement (){
    return{
      type: "DECREMENT"
    }
  }

  export function cleanCart(){
    return{
      type : "CLEAN_CART"
    }
  }

  export function removeItemCart(payload){
    return {
      type : "REMOVE_ITEM_CART",
      payload
    }
  }
