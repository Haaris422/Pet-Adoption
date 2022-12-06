// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import {toast} from "react-toastify";
// const initialState = {
//     items: [],
//     status: null,
//     createStatus: null
// }

// export const petsFetch = createAsyncThunk(
//     "pets/petsFetch",
//     async () => {
//         try{
//             const response = await axios.get("http://localhost:9002/adopt")
//             return response.data;
//         }catch(err){
//             return (err.response.data);
//         }
//     }
// );

// export const petsCreate = createAsyncThunk(
//     "pets/petsCreate",
//     async (values) => {
//         try{const response = await axios.post("http://localhost:9002/nodopt", values);
//         return response.data;
//     }catch(err){
//         console.log(err);
//         toast.error(err.response.data)
//     }
//     }
// );

// const petSlice = createSlice({
//     name:"pets",
//     initialState,
//     reducers: {},
//     extraReducers:{
//         [petsFetch.pending]: (state, action) => {
//             state.status = "pending"
//         },
//         [petsFetch.fullfilled]: (state, action) => {
//             state.status = "success"
//             state.items = action.payload
//         },
//         [petsFetch.rejected]: (state, action) => {
//             state.status = "rejected"
//         },
//         [petsCreate.pending]: (state, action) => {
//             state.createStatus = "pending"
//         },
//         [petsCreate.fullfilled]: (state, action) => {
//             state.createStatus = "success"
//             state.items.push(action.payload)  
//         },
//         [petsCreate.rejected]: (state, action) => {
//             state.createStatus = "rejected"
//         }
//     }
// })

// export default petSlice.reducer;
