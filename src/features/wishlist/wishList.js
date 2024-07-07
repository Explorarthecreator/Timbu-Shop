import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const wishlist = JSON.parse(localStorage.getItem('wishlist'))

const initialState = {
    wishlist : wishlist? wishlist:[],
}

export const WishilistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers:{
        reset:(state)=>initialState,
        addToWishlist:(state,action)=>{
            const newwishlist = action.payload
            console.log(newwishlist);

            // Check if the item is in the wishlist
            const exist = state.wishlist.find((wishlist)=>wishlist.id === newwishlist.id )

            if(exist){
                toast.error('This item is already on your wishlist')
            }else{
                let oldWishlist
                if(state.wishlist.length <= 0){
                    oldWishlist = [newwishlist]
                }else{
                    oldWishlist = [...state.wishlist,newwishlist]
                }

                localStorage.setItem('wishlist', JSON.stringify(oldWishlist))
                state.wishlist.push(newwishlist)
                toast.success('Added to wishlist')
            }
        }
    }
})


export const {reset, addToWishlist} = WishilistSlice.actions

export default WishilistSlice.reducer