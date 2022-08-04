import { configureStore, createSlice } from "@reduxjs/toolkit"

let cart = createSlice({
  name:'cart',
  initialState:[
    {id:0,name:'어묵1',count:1},
    {id:3,name:'어묵3',count:3},
  ],
    reducers : {
    addCount(state, action) {
      let number = state.findIndex((findId)=>{ return findId.id === action.payload })
      state[number].count++
    },
    removeCount(state, action) {
      let number = state.findIndex((findId)=>{ return findId.id === action.payload })
      if(state[number].count > 0){
        state[number].count--
      }
    },
    addItem(state, action) {
      state.push(action.payload)
    }
  }
})

export let {addCount, addItem, removeCount} = cart.actions

export default configureStore({
  reducer : {
    cart : cart.reducer
  }
})