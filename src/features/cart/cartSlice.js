import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cart = JSON.parse(localStorage.getItem('cart'))

const initialState = {
    cart : cart? cart :[]
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        reset:(state)=>initialState,
        addToCart:(state,action)=>{
            const newCartitem = action.payload
            
            const exist = state.cart.find((cartItem)=> cartItem.id === newCartitem.id)

            if(exist){
                toast.error('Item already exists in cart')
            }else{
                let oldItems

                if(state.cart.length <=0){
                    oldItems = [newCartitem]
                }else{
                    oldItems = [...state.cart,newCartitem]
                }

                localStorage.setItem('cart',JSON.stringify(oldItems))
                state.cart.push(newCartitem)
                toast.success('Added to cart')
            }
        },
        removeFromCart: (state,action)=>{
            const localCart = JSON.parse(localStorage.getItem('cart'))

            if(action.payload > -1){
                localCart.splice(action.payload,1)

            }
            state.cart = localCart
            localStorage.setItem('cart',JSON.stringify(localCart))
        },
        reduce:(state,action)=>{
            state.cart[action.payload.index].quantity = action.payload.quantity -1

            const localCart = JSON.parse(localStorage.getItem('cart'))
            localCart[action.payload.index].quantity = action.payload.quantity -1

            localStorage.setItem('cart',JSON.stringify(localCart))
        },
        increase:(state,action)=>{
            state.cart[action.payload.index].quantity = action.payload.quantity +1

            const localCart = JSON.parse(localStorage.getItem('cart'))
            localCart[action.payload.index].quantity = action.payload.quantity +1

            localStorage.setItem('cart',JSON.stringify(localCart))
        }
    }
})

export const {reset, addToCart, removeFromCart, reduce,increase} = CartSlice.actions

export default CartSlice.reducer