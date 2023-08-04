import { useState, useEffect, useRef } from "react";
import AddItem from "./components/AddItem";
import { Row, Col } from "reactstrap";

import GalleryModal from "./components/GalleryModal";
import { useAtom } from "jotai";
import { elementsAtom } from "./store";
import { css, injectGlobal } from "@emotion/css";
import { elementsConfig } from "./configs";

const builderCSS = {};

injectGlobal`
[data-element-id] {
  
}
`;

const Builder = () => {
  const [action, setAction] = useState(null);
  const [elements, setElements] = useAtom(elementsAtom);

  const elms = useRef([]);

  useEffect(() => {
    for (const elm of elms.current) {
      if (elm) {
        elm.onmouseenter = ({ target }) => {
          console.log("mouseenter");
          const { x, y, height, width } = target.getBoundingClientRect();
          setAction({ x, y, height, width });
        };
      }
    }
    return () => {
      for (const elm of elms.current) {
        if (elm) {
          elm.removeEventListener("mouseenter", (e) => {
            console.log("removeEventListener elm =>", e.target);
          });
        }
      }
    };
  }, [elements]);

  return (
    <div className="builder-container">
      {Object.values(elements).map((element, inx) => {
        const { tag, id, type, props } = element;
        const { RenderElement } = elementsConfig[type];
        const elementProps = {
          ...props,
          tag,
          "data-element-id": id,
        };
        return (
          <RenderElement
            ref={(ref) => elms.current.push(ref)}
            {...elementProps}
            key={inx}
          />
        );
      })}

      <Row className="mb-3">
        <Col>
          <AddItem />
        </Col>
        <Col>
          <AddItem />
        </Col>
        <Col>
          <AddItem />
        </Col>
      </Row>
      <AddItem />
      <GalleryModal />
      {action != null && (
        <div
          onMouseLeave={() => setAction(null)}
          className={css({
            position: "fixed",
            top: action.y,
            left: action.x,
            width: action.width,
            height: action.height,
            border: "dashed 1px #4ade80",
          })}
        >
          <div
            className={css({
              position: "absolute",
              right: "-1px",
              top: "-1px",
              backgroundColor: "#4ade80",
              height: 24,
              width: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFF",
              fontSize: "12px",
              cursor: "pointer",
            })}
          >
            <i className="bi bi-pencil-fill"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default Builder;
