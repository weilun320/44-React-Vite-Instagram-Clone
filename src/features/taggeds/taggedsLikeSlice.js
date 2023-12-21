import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    taggedId: 1,
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
    taggedId: 2,
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
    taggedId: 3,
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
    taggedId: 4,
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
    taggedId: 5,
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
    taggedId: 6,
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

const taggedsLikeSlice = createSlice({
  name: "taggedsLike",
  initialState: initialState,
  reducers: {
    newTaggedLike: (state, action) => {
      const newTagged = {
        taggedId: action.payload.id,
        likes: [],
      };

      state.push(newTagged);
    },
    addTaggedLike: (state, action) => {
      const newLike = {
        id: Date.now(),
        user: action.payload.user,
        date: new Date().toISOString(),
      };

      const index = state.findIndex((state) => state.taggedId === action.payload.taggedId);

      state[index].likes.push(newLike);
    },
    removeTaggedLike: (state, action) => {
      const index = state.findIndex((state) => state.taggedId === action.payload.taggedId);

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

export const { newTaggedLike, addTaggedLike, removeTaggedLike } = taggedsLikeSlice.actions;

export default taggedsLikeSlice.reducer;