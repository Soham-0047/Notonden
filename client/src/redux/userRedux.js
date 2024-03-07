import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error:false,
    loading:false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    registerStart:(state) =>{
      state.loading = true;
      state.error = false;
    },
    registerSuccess: (state,action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    recordSuccess:(state,action) =>{
      state.loading = false;
      state.currentUser = action.payload;
    },
    recordFailure: (state) =>{
      state.loading   = false;
      state.error = true;
    },
    registerFailure: (state) =>{
      state.loading   = false;
      state.error = true;
    },
    signOut:(state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },

    updateRecordStart: (state) =>{
      state.loading = true;

  },
  updateRecordSuccess: (state,action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;

  },
  updateRecordFailure: (state,action) => {
      state.loading = false;
      state.error = action.payload; 
  }
  },
});

export const { loginStart, loginSuccess, loginFailure,registerFailure,registerSuccess,registerStart,recordFailure,recordSuccess,signOut,updateRecordFailure,updateRecordStart,updateRecordSuccess} = userSlice.actions;
export default userSlice.reducer;