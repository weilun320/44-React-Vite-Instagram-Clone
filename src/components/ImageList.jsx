import { useContext } from "react";
import { ProfileContext } from "../App";
import { Button, Col, Image, Row } from "react-bootstrap";

export default function ImageList() {
  const lists = useContext(ProfileContext).lists;

  const renderList = lists.map((list, index) => (
    <Col className="text-center mx-3" key={index}>
      <Button className="bg-transparent border-0" >
        <Image className="mb-2 border p-1" src={list.image} roundedCircle height="82px" />
        <p className="fw-semibold text-dark" style={{ fontSize: "12px" }}>{list.description}</p>
      </Button>
    </Col>
  ));

  return (
    <Row className="flex-nowrap mb-4">{renderList}</Row>
  );
}
