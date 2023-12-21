import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    postId: 1,
    comments: [
      {
        id: 1,
        user: "Dave",
        userImage: "https://picsum.photos/id/320/200/200",
        comment: "Lorum ipsum",
        date: new Date().toISOString(),
      },
      {
        id: 2,
        user: "Jerry",
        userImage: "https://picsum.photos/id/321/200/200",
        comment: "Lorum ipsum",
        date: new Date().toISOString(),
      },
    ],
  },
  {
    postId: 2,
    comments: [
      {
        id: 1,
        user: "Tom",
        userImage: "https://picsum.photos/id/520/200/200",
        comment: "Lorum ipsum",
        date: new Date().toISOString(),
      },
      {
        id: 2,
        user: "David",
        userImage: "https://picsum.photos/id/521/200/200",
        comment: "Lorum ipsum",
        date: new Date().toISOString(),
      },
    ],
  },
  {
    postId: 3,
    comments: [
      {
        id: 1,
        user: "Dave",
        userImage: "https://picsum.photos/id/320/200/200",
        comment: "Lorum ipsum",
        date: new Date().toISOString(),
      },
      {
        id: 2,
        user: "Jerry",
        userImage: "https://picsum.photos/id/321/200/200",
        comment: "Lorum ipsum",
        date: new Date().toISOString(),
      },
    ],
  },
  {
    postId: 4,
    comments: [
      {
        id: 1,
        user: "Tom",
        userImage: "https://picsum.photos/id/520/200/200",
        comment: "Lorum ipsum",
        date: new Date().toISOString(),
      },
      {
        id: 2,
        user: "David",
        userImage: "https://picsum.photos/id/521/200/200",
        comment: "Lorum ipsum",
        date: new Date().toISOString(),
      },
    ],
  },
  {
    postId: 5,
    comments: [
      {
        id: 1,
        user: "Dave",
        userImage: "https://picsum.photos/id/320/200/200",
        comment: "Lorum ipsum",
        date: new Date().toISOString(),
      },
      {
        id: 2,
        user: "Jerry",
        userImage: "https://picsum.photos/id/321/200/200",
        comment: "Lorum ipsum",
        date: new Date().toISOString(),
      },
    ],
  },
  {
    postId: 6,
    comments: [
      {
        id: 1,
        user: "Tom",
        userImage: "https://picsum.photos/id/520/200/200",
        comment: "Lorum ipsum",
        date: new Date().toISOString(),
      },
      {
        id: 2,
        user: "David",
        userImage: "https://picsum.photos/id/521/200/200",
        comment: "Lorum ipsum",
        date: new Date().toISOString(),
      },
    ],
  },
];

const postsCommentSlice = createSlice({
  name: "postsComment",
  initialState: initialState,
  reducers: {
    newPostComment: (state, action) => {
      const newPost = {
        postId: action.payload.id,
        comments: [],
      };

      state.push(newPost);
    },
    addPostComment: (state, action) => {
      const newComment = {
        id: Date.now(),
        user: action.payload.user,
        userImage: action.payload.userImage,
        comment: action.payload.comment,
        date: new Date().toISOString(),
      };
      const index = state.findIndex((state) => state.postId === action.payload.postId);

      state[index].comments.push(newComment);
    },
  },
});

export const { newPostComment, addPostComment } = postsCommentSlice.actions;

export default postsCommentSlice.reducer;