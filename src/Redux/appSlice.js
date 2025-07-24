import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    open: false,
    emails:[],
    selectedEmail:null
  },

  reducers: {
    //actions
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setEmail:(state,action) =>{
      state.emails = action.payload
    },
    setselectedEmail:(state, action) =>{
      state.selectedEmail = action.payload
    }
  },
});
export const { setOpen, setEmail, setselectedEmail } = appSlice.actions;
export default appSlice.reducer;
