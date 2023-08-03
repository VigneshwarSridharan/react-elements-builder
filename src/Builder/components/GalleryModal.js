import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { css } from "@emotion/css";

const GalleryModal = ({ open, setOpen }) => {
  return (
    <Modal isOpen={open}>
      <ModalHeader
        toggle={() => {
          setOpen(false);
        }}
      >
        Gallery
      </ModalHeader>
      <ModalBody>
        <div
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
            cursor: "pointer"
          })}
        >
          <i class="bi bi-grid"></i>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            setOpen(false);
          }}
        >
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default GalleryModal;
