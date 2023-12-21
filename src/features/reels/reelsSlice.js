import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    image: "https://picsum.photos/id/129/500/500",
    description: "Reel 1 description",
    date: new Date().toISOString(),
    likes: 15,
    comments: 5,
  },
  {
    id: 2,
    image: "https://picsum.photos/id/130/500/500",
    description: "Reel 2 description",
    date: new Date().toISOString(),
    likes: 30,
    comments: 10,
  },
  {
    id: 3,
    image: "https://picsum.photos/id/131/500/500",
    description: "Reel 3 description",
    date: new Date().toISOString(),
    likes: 30,
    comments: 10,
  },
  {
    id: 4,
    image: "https://picsum.photos/id/132/500/500",
    description: "Reel 4 description",
    date: new Date().toISOString(),
    likes: 30,
    comments: 10,
  },
  {
    id: 5,
    image: "https://picsum.photos/id/133/500/500",
    description: "Reel 5 description",
    date: new Date().toISOString(),
    likes: 30,
    comments: 10,
  },
  {
    id: 6,
    image: "https://picsum.photos/id/134/500/500",
    description: "Reel 6 description",
    date: new Date().toISOString(),
    likes: 30,
    comments: 10,
  },
];

const reelsSlice = createSlice({
  name: "reels",
  initialState: initialState,
  reducers: {
    createReel: (state, action) => {
      const newReel = {
        id: action.payload.id,
        image: action.payload.image,
        description: action.payload.description,
        date: new Date().toISOString(),
        likes: 0,
        comments: 0,
      };

      state.push(newReel);
    },
    updateReel: (state, action) => {
      const index = state.findIndex((reel) => reel.id === action.payload.id);
      state[index] = action.payload;
    },
    deleteReel: (state, action) => {
      return state.filter((reel) => reel.id !== action.payload.id)
    },
  },
});

export const { createReel, updateReel, deleteReel } = reelsSlice.actions;

export default reelsSlice.reducer;