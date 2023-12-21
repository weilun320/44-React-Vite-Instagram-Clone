import { useContext, useEffect, useRef, useState } from "react";
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ProfileContext } from "../App";
import { addPostComment } from "../features/posts/postsCommentSlice";
import { addPostLike, removePostLike } from "../features/posts/postsLike";
import { addReelLike, removeReelLike } from "../features/reels/reelsLikeSlice";
import { addReelComment } from "../features/reels/reelsCommentSlice";
import { addTaggedLike, removeTaggedLike } from "../features/taggeds/taggedsLikeSlice";
import { addTaggedComment } from "../features/taggeds/taggedsCommentSlice";

export default function CommentModal({ show, handleClose, contentId, tabSelection }) {
  const [comment, setComment] = useState("");
  const [isLike, setIsLike] = useState(false);

  const { user, userImage, image, name } = useContext(ProfileContext);
  const dispatch = useDispatch();

  const commentInputRef = useRef();
  const handleFocusCommentInput = () => {
    commentInputRef.current.focus();
  }

  const post = useSelector((state) => {
    if (tabSelection === "posts") {
      return state.posts.find((post) => post.id === contentId);
    }
    else if (tabSelection === "reels") {
      return state.reels.find((reel) => reel.id === contentId);
    }
    else if (tabSelection === "taggeds") {
      return state.taggeds.find((tagged) => tagged.id === contentId);
    }
  });
  const comments = useSelector((state) => {
    if (tabSelection === "posts") {
      return state.postsComment.find((comment) => comment.postId === contentId);
    }
    else if (tabSelection === "reels") {
      return state.reelsComment.find((comment) => comment.reelId === contentId);
    }
    else if (tabSelection === "taggeds") {
      return state.taggedsComment.find((comment) => comment.taggedId === contentId);
    }
  });
  const likes = useSelector((state) => {
    if (tabSelection === "posts") {
      return state.postsLike.find((like) => like.postId === contentId);
    }
    else if (tabSelection === "reels") {
      return state.reelsLike.find((like) => like.reelId === contentId);
    }
    else if (tabSelection === "taggeds") {
      return state.taggedsLike.find((like) => like.taggedId === contentId);
    }
  });

  const likePost = () => {
    setIsLike(true);
    if (tabSelection === "posts") {
      dispatch(addPostLike({ postId: contentId, user }));
    }
    else if (tabSelection === "reels") {
      dispatch(addReelLike({ reelId: contentId, user }));
    }
    else if (tabSelection === "taggeds") {
      dispatch(addTaggedLike({ taggedId: contentId, user }));
    }
  }

  const dislikePost = () => {
    setIsLike(false);
    if (tabSelection === "posts") {
      dispatch(removePostLike({ postId: contentId, user }));
    }
    else if (tabSelection === "reels") {
      dispatch(removeReelLike({ reelId: contentId, user }));
    }
    else if (tabSelection === "taggeds") {
      dispatch(removeTaggedLike({ taggedId: contentId, user }));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment) {
      if (tabSelection === "posts") {
        dispatch(addPostComment({ postId: contentId, user, userImage, comment }));
      }
      else if (tabSelection === "reels") {
        dispatch(addReelComment({ reelId: contentId, user, userImage, comment }));
      }
      else if (tabSelection === "taggeds") {
        dispatch(addTaggedComment({ taggedId: contentId, user, userImage, comment }));
      }
      setComment("");
    }
  };

  useEffect(() => {
    if (likes.likes.length > 0) {
      const index = likes.likes.findIndex((like) => like.user === user);

      setIsLike(index !== -1);
    }
  }, [likes.likes, user]);

  return (
    <Modal show={show} onHide={handleClose} size="xl">
      <Row className="gx-0">
        <Col lg={7}>
          <Image alt={post.image} className="w-100" fluid src={post.image} />
        </Col>
        <Col lg={5} className="d-flex flex-column">
          <Modal.Header className="border-start rounded-1">
            <div>
              <Image alt={image} className="me-3" src={image} roundedCircle width={35} />
            </div>
            <span className="fw-semibold" style={{ fontSize: "14px" }}>
              {name}
            </span>
            <span className="fs-3 mx-1"> &middot; </span>
            <span className="text-primary" style={{ fontSize: "14px" }}> Follow</span>
            <Button className="bg-transparent border-0 p-0 ms-auto text-dark"><i className="bi bi-three-dots fs-5"></i></Button>
          </Modal.Header>
          <Modal.Body className="border-start overflow-y-auto" style={{ height: 0, maxHeight: "100%" }}>
            <div className="mb-4 d-flex justify-content-start">
              <div>
                <Image alt={image} className="me-3" src={image} roundedCircle width={35} />
              </div>
              <div style={{ fontSize: "14px" }}>
                <span className="fw-semibold">
                  {name}
                </span>
                <span className="ms-1">
                  {post.description}
                </span>
              </div>
            </div>
            {comments.comments.length > 0 && (
              [...comments.comments].reverse().map((comment) => (
                <div className="mb-4 d-flex justify-content-start" key={comment.id}>
                  <div>
                    <Image alt={comment.userImage} className="me-3" src={comment.userImage} roundedCircle width={35} />
                  </div>
                  <div style={{ fontSize: "14px" }}>
                    <span className="fw-semibold">
                      {comment.user}
                    </span>
                    <span className="ms-1">
                      {comment.comment}
                    </span>
                    <div className="text-secondary fw-semibold mt-1" style={{ fontSize: "12px" }}>Reply</div>
                  </div>
                  <Button className="bg-transparent border-0 p-0 ms-auto text-dark">
                    <i className="bi bi-heart" style={{ fontSize: "12px" }}></i>
                  </Button>
                </div>
              )))}
          </Modal.Body>
          <div className="w-100 border border-end-0 p-3 mb-auto">
            <div className="d-flex justify-content-between align-items-center mb-3">
              {isLike ?
                <Button className="bg-transparent border-0 p-0 text-danger fs-5 me-3" onClick={dislikePost}>
                  <i className="bi bi-heart-fill"></i>
                </Button>
                :
                <Button className="bg-transparent border-0 p-0 text-dark fs-5 me-3" onClick={likePost}>
                  <i className="bi bi-heart"></i>
                </Button>
              }
              <Button className="bg-transparent border-0 p-0 text-dark fs-5 me-3" onClick={handleFocusCommentInput}>
                <i className="bi bi-chat"></i>
              </Button>
              <Button className="bg-transparent border-0 p-0 text-dark fs-5">
                <i className="bi bi-send"></i>
              </Button>
              <Button className="bg-transparent border-0 p-0 text-dark fs-5 ms-auto">
                <i className="bi bi-bookmark"></i>
              </Button>
            </div>
            <div className="fw-semibold" style={{ fontSize: "14px" }}>
              {likes.likes.length > 1 ? likes.likes.length + " likes" : likes.likes.length + " like"}
            </div>
          </div>
          <Form onSubmit={handleSubmit}>
            <Row className="gx-0">
              <Col>
                <Form.Control
                  as="textarea"
                  className="border-0"
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add a comment..."
                  ref={commentInputRef}
                  rows={1}
                  value={comment}
                />
              </Col>
              <Col sm="auto">
                <Button className="text-primary" type="submit" variant="light">Post</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
}
