import { Group ,FormInputContainer ,FormInputLabel  } from "./form-input.styles";
import React from "react";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInputContainer {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
            
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
