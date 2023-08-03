import { css } from "@emotion/css";

const addItemCSS = css({
  minHeight: 40,
  borderRadius: 3,
  fontSize: 32,
  backgroundColor: "#ededed",
  color: "darkgray",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer"
});

const AddItem = ({ open, setOpen }) => {
  return (
    <div className={addItemCSS} onClick={() => setOpen(!open)}>
      <i class="bi bi-plus"></i>
    </div>
  );
};

export default AddItem;
