import { Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";
import ImageGrid from "./ImageGrid";

export default function TabSection() {
  return (
    <TabContainer id="tabs" defaultActiveKey="posts">
      <Nav className="justify-content-center border-top">
        <Nav.Item>
          <Nav.Link className="link-dark link-opacity-50 link-opacity-100-hover tab-nav mx-2 py-3" eventKey="posts" style={{ fontSize: "14px" }}>
            <i className="bi bi-grid-3x3"></i>
            <span className="ms-2 fw-semibold">POSTS</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="link-dark link-opacity-50 link-opacity-100-hover tab-nav mx-2 py-3" eventKey="reels" style={{ fontSize: "14px" }}>
            <i className="bi bi-collection-play"></i>
            <span className="ms-2 fw-semibold">REELS</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="link-dark link-opacity-50 link-opacity-100-hover tab-nav mx-2 py-3" eventKey="taggeds" style={{ fontSize: "14px" }}>
            <i className="bi bi-person-square"></i>
            <span className="ms-2 fw-semibold">TAGGED</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent>
        <TabPane eventKey="posts">
          <ImageGrid content={"posts"} />
        </TabPane>
        <TabPane eventKey="reels">
          <ImageGrid content={"reels"} />
        </TabPane>
        <TabPane eventKey="taggeds">
          <ImageGrid content={"taggeds"} />
        </TabPane>
      </TabContent>
    </TabContainer>
  );
}
