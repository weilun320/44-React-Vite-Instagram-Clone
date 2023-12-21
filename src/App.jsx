import { Col, Container, Row } from "react-bootstrap";
import { createContext, useState } from "react";
import { PROFILE_DATA } from "./data";
import IconButton from "./components/IconButton";
import ProfileHeader from "./components/ProfileHeader";
import ImageList from "./components/ImageList";
import TabSection from "./components/TabSection";
import AddPostModal from "./components/AddPostModal";
import "./App.css";

export const ProfileContext = createContext(null);

function App() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <ProfileContext.Provider value={PROFILE_DATA}>
      <Row>
        <Col
          xs={1}
          className="d-flex flex-column justify-content-start align-items-center vh-100 bg-light border-end"
          style={{ position: "sticky", top: 0 }}
        >
          <IconButton className="bi bi-instagram" isTop />
          <IconButton className="bi bi-house" />
          <IconButton className="bi bi-search" />
          <IconButton className="bi bi-compass" />
          <IconButton className="bi bi-film" />
          <IconButton className="bi bi-chat" />
          <IconButton className="bi bi-heart" />
          <IconButton className="bi bi-plus-square" onClick={openModal} />
          <IconButton isProfile />
          <IconButton className="bi bi-list" isBottom />
        </Col>
        <Col xs={11}>
          <Container>
            <ProfileHeader />
            <ImageList />
            <TabSection />
            <AddPostModal show={showModal} handleClose={closeModal} />
          </Container>
        </Col>
      </Row>
    </ProfileContext.Provider>
  );
}

export default App;
