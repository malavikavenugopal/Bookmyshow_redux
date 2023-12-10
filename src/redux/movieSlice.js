import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//api call using thunk
export const fetchMovie = createAsyncThunk('movieSlice/fetchMovie',()=>{
const result=axios.get('/movies.json').then(response=>response.data.movies)
console.log(result);
return result
})




export const movieSlice = createSlice({

    name:"movieSlice",
    initialState:{
         //pending
         loading:false,
         //resolve
         allMovies:[],
         searchMovies:[],
         //reject
         error:''
    },
     //to change the state,have to call extrareducer 
     extraReducers:(builder)=>{

        builder.addCase(fetchMovie.pending,(state)=>{
        state.loading = true
            })
        
            builder.addCase(fetchMovie.fulfilled,(state,action)=>{
                state.loading=false
                state.allMovies = action.payload
                state.searchMovies = action.payload
                state.error = ""
            })
            builder.addCase(fetchMovie.rejected,(state,action)=>{
                state.loading = false
                state.allMovies = ""
                state.error = action.error.message
            })
        
        
            },
            
          reducers:{

        search:(state,action)=>{
        state.allMovies= state.  searchMovies.filter((items)=>items.name.toLowerCase().includes(action.payload))
    }
}
})

export const {search} = movieSlice.actions
export default movieSlice.reducer