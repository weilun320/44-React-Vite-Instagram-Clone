import { useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import UpdatePostModal from "./UpdatePostModal";
import { deletePost } from "../features/posts/postsSlice";
import CommentModal from "./CommentModal";
import { deleteReel } from "../features/reels/reelsSlice";
import { deleteTagged } from "../features/taggeds/taggedsSlice";

export default function ImageGrid({ tabSelection }) {
  const contents = useSelector((state) => {
    if (tabSelection === "posts") {
      return state.posts;
    }
    else if (tabSelection === "reels") {
      return state.reels;
    }
    else if (tabSelection === "taggeds") {
      return state.taggeds;
    }
  });
  const contentComments = useSelector((state) => {
    if (tabSelection === "posts") {
      return state.postsComment;
    }
    else if (tabSelection === "reels") {
      return state.reelsComment;
    }
    else if (tabSelection === "taggeds") {
      return state.taggedsComment;
    }
  });
  const contentLikes = useSelector((state) => {
    if (tabSelection === "posts") {
      return state.postsLike;
    }
    else if (tabSelection === "reels") {
      return state.reelsLike;
    }
    else if (tabSelection === "taggeds") {
      return state.taggedsLike;
    }
  });

  const [show, setShow] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => {
    setCurrentPost(null);
    setShow(false);
  };

  const handleShow = (content, edit) => {
    setIsEdit(edit);
    setCurrentPost(content);
    setShow(true);
  }

  const handleDelete = (content) => {
    if (tabSelection === "posts") {
      dispatch(deletePost(content));
    }
    else if (tabSelection === "reels") {
      dispatch(deleteReel(content));
    }
    else if (tabSelection === "taggeds") {
      dispatch(deleteTagged(content));
    }
  }

  const renderImages = () => {
    return [...contents].reverse().map((content) => {
      const contentComment = contentComments.find((comment) => {
        if (tabSelection === "posts") {
          return comment.postId === content.id;
        }
        else if (tabSelection === "reels") {
          return comment.reelId === content.id;
        }
        else if (tabSelection === "taggeds") {
          return comment.taggedId === content.id;
        }
      });
      const commentsCount = contentComment ? contentComment.comments.length : 0;
      const contentLike = contentLikes.find((like) => {
        if (tabSelection === "posts") {
          return like.postId === content.id;
        }
        else if (tabSelection === "reels") {
          return like.reelId === content.id;
        }
        else if (tabSelection === "taggeds") {
          return like.taggedId === content.id;
        }
      });
      const likesCount = contentLike ? contentLike.likes.length : 0;

      return (
        <Col md={4} key={content.id} className="mb-4">
          <Button className="bg-transparent border-0 m-0 p-0" onClick={() => handleShow(content, false)}>
            <div className="position-relative image-overlay-container">
              <Image src={content.image} fluid />
              <div className="image-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle text-light fw-semibold fs-5">
                <span className="me-3">
                  <i className="bi bi-heart-fill me-2"></i>
                  {likesCount}
                </span>
                <span className="ms-3">
                  <i className="bi bi-chat-fill me-2"></i>
                  {commentsCount}
                </span>
              </div>
            </div>
          </Button>

          <Button onClick={() => handleShow(content, true)} variant="outline-primary">
            <i className="bi bi-pencil-square"></i>
          </Button>
          <Button onClick={() => handleDelete(content)} variant="outline-danger">
            <i className="bi bi-trash"></i>
          </Button>
        </Col>
      );
    });
  };

  return (
    <>
      <Row>{renderImages()}</Row>
      {currentPost && isEdit && (
        <UpdatePostModal
          show={show}
          handleClose={handleClose}
          contentId={currentPost.id}
          tabSelection={tabSelection}
        />
      )}
      {currentPost && !isEdit && (
        <CommentModal
          show={show}
          handleClose={handleClose}
          contentId={currentPost.id}
          tabSelection={tabSelection}
        />
      )}
    </>
  );
}
