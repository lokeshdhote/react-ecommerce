

export {  productsLoad } from "../Reducers/productSlice.jsx";

import { useState } from "react";
import {  productsLike, productsLoad,productsCart } from "../Reducers/productSlice.jsx";
import axios from "axios";
export const asyncload = (d) => async (dispatch, getState)=>{
    // dispatch(productsLoad())

}
export const asynclike = (id) => async (dispatch, getState)=>{
    try {
      

      dispatch(productsLike(id))
      
    } catch (error) {
        console.log(error);
    }

}
export const asynccart = (id) => async (dispatch, getState)=>{
    try {
      

      dispatch(productsCart(id))
      
    } catch (error) {
        console.log(error);
    }

}