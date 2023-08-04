import { forwardRef } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { ELEMENT_OPTIONS_TYPE, ELEMENT_TYPE } from "./constants";

export const optionsConfig = {
  [ELEMENT_OPTIONS_TYPE.TEXT]: {
    type: ELEMENT_OPTIONS_TYPE.TEXT,
    RenderField: ({ name, value, setValue }) => {
      return (
        <FormGroup>
          <Label>{name}</Label>

          <Input
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
        </FormGroup>
      );
    },
  },
  [ELEMENT_OPTIONS_TYPE.TEXTAREA]: {
    type: ELEMENT_OPTIONS_TYPE.TEXTAREA,
    RenderField: ({ name, value, setValue }) => {
      return (
        <FormGroup>
          <Label>{name}</Label>
          <Input
            type="textarea"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
        </FormGroup>
      );
    },
  },
  [ELEMENT_OPTIONS_TYPE.SELECT]: {
    type: ELEMENT_OPTIONS_TYPE.SELECT,
    RenderField: ({ name, options, value, setValue }) => {
      return (
        <FormGroup>
          <Label>{name}</Label>
          <Input
            type="select"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          >
            <option>Select</option>
            {options.map((option) => {
              return (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              );
            })}
          </Input>
        </FormGroup>
      );
    },
  },
};

export const elementsConfig = {
  [ELEMENT_TYPE.PARAGRAPH]: {
    id: "LKWYQJB7",
    type: ELEMENT_TYPE.PARAGRAPH,
    icon: "bi bi-paragraph",
    RenderElement: forwardRef(({ content, ...props }, ref) => {
      return (
        <p {...props} ref={ref}>
          {content}
        </p>
      );
    }),
    options: {
      className: {
        key: "className",
        name: "Class",
        type: ELEMENT_OPTIONS_TYPE.TEXT,
        value: "",
      },
      content: {
        key: "content",
        name: "Content",
        type: ELEMENT_OPTIONS_TYPE.TEXTAREA,
        value: "",
      },
    },
  },
  [ELEMENT_TYPE.HEADING]: {
    id: "AS43RR",
    type: ELEMENT_TYPE.HEADING,
    icon: "bi bi-type-h1",
    RenderElement: forwardRef(
      ({ headingType: HeadingType, content, ...props }, ref) => {
        return (
          <HeadingType {...props} ref={ref}>
            {content}
          </HeadingType>
        );
      }
    ),
    options: {
      headingType: {
        key: "headingType",
        name: "Heading Type",
        type: ELEMENT_OPTIONS_TYPE.SELECT,
        options: [
          {
            label: "Title",
            value: "h1",
          },
          {
            label: "Extra Large",
            value: "h2",
          },
          {
            label: "Large",
            value: "h3",
          },
          {
            label: "Medium",
            value: "h4",
          },
          {
            label: "Regular",
            value: "h5",
          },
          {
            label: "Small",
            value: "h6",
          },
        ],
        value: "",
      },
      className: {
        key: "className",
        name: "Class",
        type: ELEMENT_OPTIONS_TYPE.TEXT,
        value: "",
      },
      content: {
        key: "content",
        name: "Content",
        type: ELEMENT_OPTIONS_TYPE.TEXTAREA,
        value: "",
      },
    },
  },
};
