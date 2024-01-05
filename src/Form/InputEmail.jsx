import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const InputEmail = (props) => {
  return (
    <>
      <FormGroup className="mb-3">
        <Label>{props.name}</Label>
        <Input
          type="email"
          disabled={props.disabled}
          {...props.validation}
          invalid={props.metaProps.touched && !!props.metaProps.error} // Mark the input as invalid when there's an error
        />
        {props.metaProps.touched && props.metaProps.error && (
          <FormFeedback>{props.metaProps.error}</FormFeedback>
        )}
      </FormGroup>
    </>
  );
};

export default InputEmail;
