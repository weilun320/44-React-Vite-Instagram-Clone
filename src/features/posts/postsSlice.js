import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    image: "https://picsum.photos/id/123/500/500",
    description: "Post 1 description",
    date: new Date().toISOString(),
    likes: 15,
    comments: 5,
  },
  {
    id: 2,
    image: "https://picsum.photos/id/124/500/500",
    description: "Post 2 description",
    date: new Date().toISOString(),
    likes: 30,
    comments: 10,
  },
  {
    id: 3,
    image: "https://picsum.photos/id/125/500/500",
    description: "Post 3 description",
    date: new Date().toISOString(),
    likes: 30,
    comments: 10,
  },
  {
    id: 4,
    image: "https://picsum.photos/id/126/500/500",
    description: "Post 4 description",
    date: new Date().toISOString(),
    likes: 30,
    comments: 10,
  },
  {
    id: 5,
    image: "https://picsum.photos/id/127/500/500",
    description: "Post 5 description",
    date: new Date().toISOString(),
    likes: 30,
    comments: 10,
  },
  {
    id: 6,
    image: "https://picsum.photos/id/128/500/500",
    description: "Post 6 description",
    date: new Date().toISOString(),
    likes: 30,
    comments: 10,
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    createPost: (state, action) => {
      const newPost = {
        id: action.payload.id,
        image: action.payload.image,
        description: action.payload.description,
        date: new Date().toISOString(),
        likes: 0,
        comments: 0,
      };

      state.push(newPost);
    },
    updatePost: (state, action) => {
      const index = state.findIndex((post) => post.id === action.payload.id);
      state[index] = action.payload;
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload.id)
    },
  },
});

export const { createPost, updatePost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;