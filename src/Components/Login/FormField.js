import React from "react";
import TextField from '@material-ui/core/TextField'

function FormField({ name, label, ...rest }) {
  return (
    <div >
      <TextField  id={name} name={name} {...rest} />
    </div>
  );
}

export default FormField;