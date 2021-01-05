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
  