import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    inputValue: ''
}



const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        getInputValue: (state, action) => {
            state.inputValue = action.payload
            console.log(state.inputValue)
        }
    }
})

export const { getInputValue } = searchSlice.actions;
export default searchSlice.reducer;