import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { css } from "@emotion/css";
import { useAtom } from "jotai";
import { elementsAtom, openGalleryAtom } from "../store";
import { useState } from "react";
import { set } from "lodash";
import { elementsConfig, optionsConfig } from "../configs";
import cloneDeep from "lodash/cloneDeep";

const optionsToProps = (options) =>
  options.reduce(
    (props, option) => ({ ...props, [option.key]: option.value }),
    {}
  );

const GalleryModal = () => {
  const [elements, setElements] = useAtom(elementsAtom);
  const [openGallery, setOpenGallery] = useAtom(openGalleryAtom);
  const [selectedElementConfig, setSelectedElementConfig] = useState(null);

  const toggle = () => {
    setOpenGallery((prev) => !prev);
  };

  const addElement = () => {
    setElements((prev) => {
      const id = new Date().getTime().toString(36).toUpperCase();
      const newElement = {
        id,
        type: selectedElementConfig.type,
        props: optionsToProps(Object.values(selectedElementConfig.options)),
      };
      set(prev, id, newElement);
      return { ...prev };
    });
    setOpenGallery(false);
    setSelectedElementConfig(null);
  };

  return (
    <Modal isOpen={openGallery}>
      <ModalHeader toggle={toggle}>Gallery</ModalHeader>
      <ModalBody>
        {selectedElementConfig === null &&
          Object.values(elementsConfig).map((elementConfig) => {
            const { icon, id } = elementConfig;
            return (
              <div
                onClick={() =>
                  setSelectedElementConfig(cloneDeep(elementConfig))
                }
                className={css({
                  height: 64,
                  width: 64,
                  borderRadius: 3,
                  backgroundColor: "#ededed",
                  color: "darkgray",
                  fontSize: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                })}
                key={id}
              >
                <i className={icon}></i>
              </div>
            );
          })}
        {selectedElementConfig != null && (
          <div>
            {Object.values(selectedElementConfig.options).map((option) => {
              const { name, type, value, key } = option;
              const { RenderField } = optionsConfig[type];
              return (
                <RenderField
                  {...option}
                  setValue={(value) => {
                    setSelectedElementConfig((prev) => {
                      set(prev.options, `${key}.value`, value);
                      return { ...prev };
                    });
                  }}
                  key={`${selectedElementConfig.id}-${key}`}
                />
              );
            })}
          </div>
        )}
      </ModalBody>
      <ModalFooter>
        <Button onClick={toggle}>Close</Button>
        {selectedElementConfig != null && (
          <Button color="success" onClick={addElement}>
            Add
          </Button>
        )}
      </ModalFooter>
    </Modal>
  );
};

export default GalleryModal;
