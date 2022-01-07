import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:'Guest',
    email:'guest@gmail.com'
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        updateUserInfo: (state,action)=>{
            // console.log(action.payload);
            state.name = action.payload.name;
            state.email = action.payload.email
        }
    }
})

//export actions
export const { updateUserInfo } = userSlice.actions

//export reducer
export default userSlice.reducer;