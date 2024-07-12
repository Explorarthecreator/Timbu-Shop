import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
    products : [],
    product:{},
    quantity: 1
}


// export const getProducts = createAsyncThunk('products/getAll',async(age,thunkAPI)=>{
//     try {
//         const response = await axios.get('/api/products', {
//             headers:{

//             },
//             params: {
//               organization_id: '6530a53bcd4945e7bd5ced47bc316c10',
//               reverse_sort: false,
//               page:age,
//               Appid: 'UJ1RLO83557FEP4',
//               Apikey: '6b4ff02cb4f04cff84363cc80554f0e920240712132958737265',
//             },
//           });

//           console.log(response.data)
//     } catch (error) {
        
//     }
// })

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