import { createSlice } from '@reduxjs/toolkit'


export const homeSlice = createSlice({
name: 'home',
initialState: {

    url: {},
    genres: {}

},
reducers: {

    getApiConfiguration: (state,action)=>{

    },
    getGenres:(state,action)=>{

    }
},
})

export const { getApiConfiguration,getGenres } = homeSlice.actions

export default homeSlice.reducer
