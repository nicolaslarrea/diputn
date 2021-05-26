import instance from "../Config/axios"

export function getProductos(){
  return instance.get("items")
}

export function getProducto(id){
  return instance.get("items/"+id)
}

/* Así serían las consultas con fetch en vez de axios.
import { endpoint } from "../Config/config"

export function getProductos(){
  return fetch(endpoint+"/items")
  .then(res=>res.json())
}

export function getProducto(id){
  return fetch(endpoint+"/items/"+id)
  .then(res=>res.json())
}
*/
