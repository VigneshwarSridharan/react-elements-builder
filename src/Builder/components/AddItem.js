import { css } from "@emotion/css";
import { useSetAtom } from "jotai";
import { openGalleryAtom } from "../store";

const addItemCSS = css({
  minHeight: 40,
  borderRadius: 3,
  fontSize: 32,
  backgroundColor: "#ededed",
  color: "darkgray",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

const AddItem = () => {
  const setOpenGallery = useSetAtom(openGalleryAtom);
  const handleToggle = () => setOpenGallery((prev) => !prev);
  return (
    <div className={addItemCSS} onClick={handleToggle}>
      <i className="bi bi-plus"></i>
    </div>
  );
};

export default AddItem;
