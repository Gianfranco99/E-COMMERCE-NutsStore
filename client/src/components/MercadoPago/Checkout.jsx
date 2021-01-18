import { useEffect } from 'react'
import s from './Checkout.module.css';
import React from "react";
import { useSelector } from 'react-redux';


export default function Comprar({ productos, data }) {
  const cart = useSelector(state => state.productCart);
  useEffect(() => {
    const script = document.createElement('script'); //Crea un elemento html script

    const attr_data_preference = document.createAttribute('data-preference-id') //Crea un nodo atribute
    attr_data_preference.value = data.id  //Le asigna como valor el id que devuelve MP

    //Agrega atributos al elemento script
    script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.setAttributeNode(attr_data_preference)

    //Agrega el script como nodo hijo del elemento form
    document.getElementById('form1').appendChild(script)
    return () => {
      //Elimina el script como nodo hijo del elemento form
      document.getElementById('form1').removeChild(script);
    }
  }, [data])
  return (
    <div>

      <form id='form1'>

        <h4>Checkout</h4>
        
        <div className={s.gridContainer} >
          {cart.map((producto, i) => {
          return (
              <div className={s.products} key={i}>
                <ul className={s.ul} >
                  <li>{producto.payload.name}</li>
                  <li>{'$' + producto.payload.price}</li>
                  <li>{producto.quantity}</li>
                </ul>
              </div>
            )
          })}
        </div>
      </form>

    </div>
  )
}
