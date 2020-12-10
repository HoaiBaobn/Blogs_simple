import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isSignedIn: false,
        userDate: null,
        searchInput: "news",
        blogDate: null,
    },
    reducers: {
        setSignedIn: (state, action) => {
            state.isSignedIn = action.payload;
        },
        setUserDate: (sate, action) => {
            sate.userDate = action.payload;
        },
        setInput: (state, action) => {
            state.blogDate = action.payload;
        },
    },
});

export const {
    setSignedIn,
    setUserData,
    setInput,
    setBlogData,
} = userSlice.actions;

export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;
export const selectUserInput = (state) => state.user.searchInput;
export const selectBlogData = (state) => state.user.blogData;

export default userSlice.reducer;
