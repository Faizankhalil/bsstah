import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const InputText = (props) => {

  return (
    <>
      <FormGroup className="mb-3">
        <Label>{props.name}</Label>
        <Input
          disabled={props.disabled}
          type="text"
          {...props.validation}
          invalid={props.metaProps?.touched && !!props.metaProps?.error}
        />
        {props.metaProps?.touched && props.metaProps?.error && (
          <FormFeedback>{props.metaProps?.error}</FormFeedback>
        )}
      </FormGroup>
    </>
  );
};

export default InputText;
