import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    postId: 1,
    likes: [
      {
        id: 1,
        user: "Dave",
        date: new Date().toISOString(),
      },
      {
        id: 2,
        user: "Jerry",
        date: new Date().toISOString(),
      },
    ],
  },
  {
    postId: 2,
    likes: [
      {
        id: 1,
        user: "Tom",
        date: new Date().toISOString(),
      },
      {
        id: 2,
        user: "David",
        date: new Date().toISOString(),
      },
    ],
  },
  {
    postId: 3,
    likes: [
      {
        id: 1,
        user: "Dave",
        date: new Date().toISOString(),
      },
      {
        id: 2,
        user: "Jerry",
        date: new Date().toISOString(),
      },
    ],
  },
  {
    postId: 4,
    likes: [
      {
        id: 1,
        user: "Tom",
        date: new Date().toISOString(),
      },
      {
        id: 2,
        user: "David",
        date: new Date().toISOString(),
      },
    ],
  },
  {
    postId: 5,
    likes: [
      {
        id: 1,
        user: "Dave",
        date: new Date().toISOString(),
      },
      {
        id: 2,
        user: "Jerry",
        date: new Date().toISOString(),
      },
    ],
  },
  {
    postId: 6,
    likes: [
      {
        id: 1,
        user: "Tom",
        date: new Date().toISOString(),
      },
      {
        id: 2,
        user: "David",
        date: new Date().toISOString(),
      },
    ],
  },
];

const postsLikeSlice = createSlice({
  name: "postsLike",
  initialState: initialState,
  reducers: {
    newPostLike: (state, action) => {
      const newPost = {
        postId: action.payload.id,
        likes: [],
      };

      state.push(newPost);
    },
    addPostLike: (state, action) => {
      const newLike = {
        id: Date.now(),
        user: action.payload.user,
        date: new Date().toISOString(),
      };

      const index = state.findIndex((state) => state.postId === action.payload.postId);

      state[index].likes.push(newLike);
    },
    removePostLike: (state, action) => {
      const index = state.findIndex((state) => state.postId === action.payload.postId);

      if (index !== -1) {
        const updatedLikes = state[index].likes.filter((like) => like.user !== action.payload.user);

        const updatedState = [...state];
        updatedState[index] = { ...updatedState[index], likes: updatedLikes };

        return updatedState;
      }

      return state;
    },
  },
});

export const { newPostLike, addPostLike, removePostLike } = postsLikeSlice.actions;

export default postsLikeSlice.reducer;