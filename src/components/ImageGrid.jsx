import { useContext } from "react";
import { ProfileContext } from "../App";
import { Col, Image, Row } from "react-bootstrap";

export default function ImageGrid({ content }) {
  const contents = useContext(ProfileContext);
  let images = null;

  if (content === "posts") {
    images = contents.posts.map((post) => post.image);
  }
  else if (content === "reels") {
    images = contents.reels.map((reel) => reel.image);
  }
  else if (content === "taggeds") {
    images = contents.taggeds.map((tagged) => tagged.image);
  }

  const renderImages = () => {
    return images.map((imageUrl, index) => (
      <Col md={4} key={index} className="mb-4">
        <Image src={imageUrl} fluid />
      </Col>
    ));
  };

  return <Row>{renderImages()}</Row>;
}
