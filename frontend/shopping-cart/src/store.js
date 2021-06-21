
import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunk from "redux-thunk"
import { cartReducer } from "./reducers/cartReducers"
import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
  } from './reducers/orderReducers';
import { productDetailsReducer, productListReducer } from "./reducers/productReducers"

import { userRegisterReducer, userSigninReducer } from './reducers/userReducer';
// import data from "./data"
const initialState={
    userSignin:{
        userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null

    },
    cart:{
        cartItems:localStorage.getItem("cartItems")
        ?JSON.parse(localStorage.getItem("cartItems")):[],
        shippingAddress:localStorage.getItem("shippingAddress")
        ?JSON.parse(localStorage.getItem("shippingAddress")):{},
        paymentMethod:"PayPal"
    }
   
}

// const reducer=(state,action)=>{
//     return {products:data.products}
// }

const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
})


//to show redux in dev compiler tools we have to update compose

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose


const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))


export default store