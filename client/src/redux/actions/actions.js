import {store,persistor} from '../store'

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
 

  export function getReviews (){
    return function(dispatch){
      return fetch(`http://localhost:3001/products/reviews`)
      .then(response => response.json())
      .then(json =>{
        dispatch({
          type: "GET_REVIEWS",
          payload:json
        })
      })
    }
  }

  export function addProductCart(payload){
     const existing = store.getState().productCart.filter(
      p => p.payload?.id === payload.id,
    ).length;
    let products = [...store.getState().productCart];
    if (existing === 0) {
      products = [{ payload, quantity: 1 }, ...products];
    }
    if (existing === 1) {
      let _product = products.find(p => p.payload?.id === payload.id);
      const index = products.indexOf(_product);
      const filtered = store.getState().productCart.filter(
        p => p.payload?.id !== payload.id,
      );
      _product.quantity++;
      filtered.splice(index, 0, _product); // at index
    }

    return {
      type : "ADDPRODUCT_CART",
      payload: products
    }
  }
  export function removeProductFromCart(payload){
    const existing = store.getState().productCart.find(
      p => p.payload.id === payload.id,
    );
    let products = [...store.getState().productCart];
    if (existing.quantity === 1) {
      products = products.filter(p => p.payload.id !== payload.id);
    }
  
    if (existing.quantity > 1) {
      let _product = products.find(p => p.payload.id === payload.id);
      _product.quantity--;
    }

    return {
      type : "REMOVEPRODUCT_CART",
      payload: products
    }

  }

  export function removeProductsFromCart(payload){
    let products = [...store.getState().productCart];
  products = products.filter(p => p.payload.id !== payload.id);

  return {
    type : "REMOVEALLPRODUCT_CART",
    payload: products
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
          payload: json
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

  export function getUsers(){
    return function(dispatch){
      return fetch(`http://localhost:3001/user`)
      .then(r => r.json())
      .then(json =>{
        dispatch({
          type : "GET_USERS",
          payload: json
        })
      })
    }
  }
  

