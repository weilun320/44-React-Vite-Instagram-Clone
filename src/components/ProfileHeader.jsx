import { useContext } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { ProfileContext } from "../App";

export default function ProfileHeader() {
  const {
    image,
    name,
    posts_no,
    followers,
    following,
    subheader,
    account_type: accountType,
    description,
    link,
  } = useContext(ProfileContext);

  return (
    <Row className="p-5">
      <Col md={3} className="d-flex align-items-center justify-content-center mb-5 mb-md-0">
        <Image roundedCircle src={image} style={{ height: "150px" }} />
      </Col>
      <Col md={9}>
        <span className="me-4" style={{ fontSize: "20px" }}>
          {name}
        </span>
        <Button className="me-2 fw-semibold">Follow Back</Button>
        <Button variant="light me-2 fw-semibold">Message</Button>
        <Button variant="light me-2">
          <i className="bi bi-person-plus"></i>
        </Button>
        <Button variant="light">
          <i className="bi bi-three-dots"></i>
        </Button>
        <br />
        <br />
        <span className="me-4">
          <span className="fw-semibold">{posts_no}</span> posts
        </span>
        <span className="me-4">
          <span className="fw-semibold">{followers}</span> followers
        </span>
        <span className="me-4">
          <span className="fw-semibold">{following}</span> following
        </span>
        <br />
        <br />
        <p className="fw-semibold" style={{ margin: 0 }}>{subheader}</p>
        <p className="text-secondary m-0" style={{ fontSize: "14px" }}>{accountType}</p>
        {description.split("\n").map((desc, index) => (
          desc && (
            <p className="m-0" key={index} style={{ fontSize: "14px" }}>
              {desc}
            </p>
          )
        ))}
        <a href={link} style={{ fontSize: "14px" }}>{link}</a>
      </Col>
    </Row>
  );
}
