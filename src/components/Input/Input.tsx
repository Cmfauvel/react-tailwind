import React, { ReactElement } from "react";
/* import 'bulma/css/bulma.min.css'; */
import { Form } from "react-bulma-components";
export const Input = (props: {
  label: string;
  placeholder: string;
  setValue: (text: string) => void
}): ReactElement => {
  return (
    <>
      <Form.Field
        style={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >
        <Form.Label>{props.label}</Form.Label>
        <Form.Control>
          <Form.Input
          onChange={(event) => props.setValue(event.target.value)}
            style={{
              border: "1px solid black",
              borderRadius: "4px",
              padding: "0.5rem",
              minWidth: "250px",
              marginBottom: "15px",
            }}
            type="text"
            placeholder={props.placeholder}
          />
        </Form.Control>
      </Form.Field>
    </>
  );
};
