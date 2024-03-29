import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const InputPassword = (props) => {
  return (
    <>
      <FormGroup className="mb-3">
        <Label hidden={props.hidden}>{props.name}</Label>
        <Input
          type="password"
          disabled={props.disabled}
          hidden={props.hidden}
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

export default InputPassword;
