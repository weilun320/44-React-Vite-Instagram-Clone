import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    reelId: 1,
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
    reelId: 2,
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
    reelId: 3,
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
    reelId: 4,
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
    reelId: 5,
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
    reelId: 6,
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

const reelsCommentSlice = createSlice({
  name: "reelsComment",
  initialState: initialState,
  reducers: {
    newReelComment: (state, action) => {
      const newReel = {
        reelId: action.payload.id,
        comments: [],
      };

      state.push(newReel);
    },
    addReelComment: (state, action) => {
      const newComment = {
        id: Date.now(),
        user: action.payload.user,
        userImage: action.payload.userImage,
        comment: action.payload.comment,
        date: new Date().toISOString(),
      };
      const index = state.findIndex((state) => state.reelId === action.payload.reelId);

      state[index].comments.push(newComment);
    },
  },
});

export const { newReelComment, addReelComment } = reelsCommentSlice.actions;

export default reelsCommentSlice.reducer;