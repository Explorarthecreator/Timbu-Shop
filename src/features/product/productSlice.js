import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : [],
    product:{},
    quantity: 1
}

export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        reset:(state)=>initialState,
        resetProduct:(state)=>{
            state.product = {}
            state.quantity = 1
        },
        setProduct: (state,action)=>{
            state.product = action.payload
        },
        setProducts:(state,action)=>{
            state.products = action.payload
        },
        
    }
})

export const {reset, resetProduct, setProduct, setProducts} = ProductSlice.actions

export default ProductSlice.reducer