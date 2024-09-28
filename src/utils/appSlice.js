import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name : 'app',
    initialState:{
        isMenuOpen: false,
        showMiniIcons: true
    },
    reducers:{
        toggleMenu(state){
         state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu(state){
            state.isMenuOpen = false
        },
        toggleMiniIcons(state, action){
            state.showMiniIcons = action.payload
        }

    }
})

export const {toggleMenu, closeMenu, toggleMiniIcons} = appSlice.actions;
export default appSlice.reducer;