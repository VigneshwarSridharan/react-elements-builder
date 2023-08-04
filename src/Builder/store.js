import { atom } from "jotai";
import { forwardRef } from "react";

import { ELEMENT_OPTIONS_TYPE, ELEMENT_TYPE } from "./constants";

export const elementsAtom = atom({
  LKWXBLD7: {
    id: "LKWXBLD7",
    type: ELEMENT_TYPE.PARAGRAPH,
    tag: "p",
    props: {
      className: "",
      content: "Smaple content",
    },
  },
});

export const openGalleryAtom = atom(false);
