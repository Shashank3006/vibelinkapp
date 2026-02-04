import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    token: null,
    error: null,
    isUserLoaded: false,
    isLoading: false,
    data:null,
    
  },
  reducers: {
   tokenGenrateSuccess: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },


    loginSuccess: (state, action) => {
      state.user = action.payload.data.user.name;
      state.data=action.payload;
      console.log("username", state.user);
      state.token = action.payload.data.token;
      state.isUserLoaded = true;
      state.error = null;
    },
    dataSet:(state,action) => {
      state.data = action.payload;
    }

    ,

    userLoaded: (state, action) => {
      state.user = action.payload;
      state.isUserLoaded = true;
    },
    loadingStatus: (state, action) => {
      state.isLoading=action.payload;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.isUserLoaded = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
    tokenGenrateSuccess,
  loginSuccess,
  logout,
  userLoaded,
  setError,
  loadingStatus,
  dataSet,
} = authSlice.actions;

export default authSlice.reducer;
