import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Checkboxs(props) {
    const {label,checked,onChange} = props
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox checked={checked} onChange={onChange} />} label={label} />
    </FormGroup>
  );
}