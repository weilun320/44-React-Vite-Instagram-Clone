import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import { ProfileContext } from "../App";

export default function IconButton({ isTop, isBottom, isProfile, className, onClick }) {
  const userImage = useContext(ProfileContext).userImage;
  let margin = "light";

  if (isTop) {
    margin = "light my-4";
  }
  else if (isBottom) {
    margin = "light mt-auto mb-3"
  }

  return (
    <Button variant={margin} style={{ marginBottom: "7px" }} onClick={onClick}>
      {isProfile ?
        <Image roundedCircle src={userImage} height="26px" />
        :
        <i className={className} style={{ fontSize: "24px" }}></i>
      }
    </Button>
  );
}
