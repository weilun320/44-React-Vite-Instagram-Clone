import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../features/posts/postsSlice";
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import { updateReel } from "../features/reels/reelsSlice";
import { updateTagged } from "../features/taggeds/taggedsSlice";

export default function UpdatePostModal({ show, handleClose, contentId, tabSelection }) {
  const { image, name } = useContext(ProfileContext);
  const dispatch = useDispatch();

  const content = useSelector((state) => {
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
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [invalidUrl, setInvalidUrl] = useState(false);

  useEffect(() => {
    if (content) {
      setImageUrl(content.image);
      setDescription(content.description);
    }
  }, [content]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (imageUrl) {
      if (tabSelection === "posts") {
        dispatch(updatePost({ id: contentId, image: imageUrl, description }));
      }
      else if (tabSelection === "reels") {
        dispatch(updateReel({ id: contentId, image: imageUrl, description }));
      }
      else if (tabSelection === "taggeds") {
        dispatch(updateTagged({ id: contentId, image: imageUrl, description }));
      }
      setImageUrl("");
      setDescription("");
      handleClose();
    }
    else {
      setInvalidUrl(true);
    }
  };

  const handleImageError = () => {
    setInvalidUrl(true);
  };

  const handleImageLoad = () => {
    setInvalidUrl(false);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header>
        <Modal.Title>Edit Post</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Row>
            <Col sm={7} style={{ margin: "0px" }}>
              <Image
                src={imageUrl ? imageUrl : "https://sig1.co/img-placeholder-1"}
                alt="Uploaded content"
                onError={handleImageError}
                onLoad={handleImageLoad}
                style={{ width: "100%" }}
              />
            </Col>
            <Col sm={5}>
              <Image
                src={image}
                alt="Uploader"
                style={{ width: "32px" }}
                roundedCircle
              />
              <span className="ms-3">{name}</span>
              <Form.Control
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="my-3"
                placeholder="Add image url"
              />
              {invalidUrl && (
                <div className="text-danger">
                  Invalid URL or failed to load image
                </div>
              )}
              <Form.Control
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="my-3"
                as="textarea"
                rows={3}
                placeholder="Write a caption..."
              />
              <Button type="submit" style={{ width: "100%" }}>
                Share
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
