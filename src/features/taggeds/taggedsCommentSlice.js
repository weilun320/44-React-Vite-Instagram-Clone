import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    taggedId: 1,
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
    taggedId: 2,
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
    taggedId: 3,
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
    taggedId: 4,
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
    taggedId: 5,
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
    taggedId: 6,
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

const taggedsCommentSlice = createSlice({
  name: "taggedsComment",
  initialState: initialState,
  reducers: {
    newTaggedComment: (state, action) => {
      const newTagged = {
        taggedId: action.payload.id,
        comments: [],
      };

      state.push(newTagged);
    },
    addTaggedComment: (state, action) => {
      const newComment = {
        id: Date.now(),
        user: action.payload.user,
        userImage: action.payload.userImage,
        comment: action.payload.comment,
        date: new Date().toISOString(),
      };
      const index = state.findIndex((state) => state.taggedId === action.payload.taggedId);

      state[index].comments.push(newComment);
    },
  },
});

export const { newTaggedComment, addTaggedComment } = taggedsCommentSlice.actions;

export default taggedsCommentSlice.reducer;