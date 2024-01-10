import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const InputCheck = (props) => {
  return (
    <>
    <FormGroup check>
     <Label check >
        <Input
            type="checkbox"
            {...props.validation}
        />{' '}
       {props.name}
        </Label>
        {props.metaProps?.touched && props.metaProps?.error && (
          <FormFeedback>{props.metaProps?.error}</FormFeedback>
        )}
        </FormGroup>
    </>
  );
};

export default InputCheck;
