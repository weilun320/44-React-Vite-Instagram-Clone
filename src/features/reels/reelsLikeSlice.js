import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    reelId: 1,
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
    reelId: 2,
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
    reelId: 3,
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
    reelId: 4,
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
    reelId: 5,
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
    reelId: 6,
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

const reelsLikeSlice = createSlice({
  name: "reelsLike",
  initialState: initialState,
  reducers: {
    newReelLike: (state, action) => {
      const newReel = {
        reelId: action.payload.id,
        likes: [],
      };

      state.push(newReel);
    },
    addReelLike: (state, action) => {
      const newLike = {
        id: Date.now(),
        user: action.payload.user,
        date: new Date().toISOString(),
      };

      const index = state.findIndex((state) => state.reelId === action.payload.reelId);

      state[index].likes.push(newLike);
    },
    removeReelLike: (state, action) => {
      const index = state.findIndex((state) => state.reelId === action.payload.reelId);

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

export const { newReelLike, addReelLike, removeReelLike } = reelsLikeSlice.actions;

export default reelsLikeSlice.reducer;