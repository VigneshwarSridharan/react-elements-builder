import { useState } from "react";
import AddItem from "./components/AddItem";
import { Row, Col } from "reactstrap";

import GalleryModal from "./components/GalleryModal";

const builderCSS = {};

const Builder = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="builder-container">
      <Row className="mb-3">
        <Col>
          <AddItem {...{ open, setOpen }} />
        </Col>
        <Col>
          <AddItem {...{ open, setOpen }} />
        </Col>
        <Col>
          <AddItem {...{ open, setOpen }} />
        </Col>
      </Row>
      <AddItem {...{ open, setOpen }} />
      <GalleryModal {...{ open, setOpen }} />
    </div>
  );
};

export default Builder;
