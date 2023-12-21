import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/posts/postsSlice";
import postsCommentReducer from "./features/posts/postsCommentSlice";
import postsLikeReducer from "./features/posts/postsLike";
import reelsReducer from "./features/reels/reelsSlice";
import reelsCommentReducer from "./features/reels/reelsCommentSlice";
import reelsLikeReducer from "./features/reels/reelsLikeSlice";
import taggedsReducer from "./features/taggeds/taggedsSlice";
import taggedsCommentReducer from "./features/taggeds/taggedsCommentSlice";
import taggedsLikeReducer from "./features/taggeds/taggedsLikeSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    postsComment: postsCommentReducer,
    postsLike: postsLikeReducer,
    reels: reelsReducer,
    reelsComment: reelsCommentReducer,
    reelsLike: reelsLikeReducer,
    taggeds: taggedsReducer,
    taggedsComment: taggedsCommentReducer,
    taggedsLike: taggedsLikeReducer,
  },
});