import { configureStore, createSlice } from "@reduxjs/toolkit"

let cart = createSlice({
  name:'cart',
  initialState:[
    {    
    id: 'product01',
    img:'/baggu_main_page_imgs/standard_img01.jpg',
    count:0,
    title: 'standard bag1',
    price: 6750
  }
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
      alert('장바구니에 추가되었습니다.')
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