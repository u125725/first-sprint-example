import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel
            control={<Checkbox value="Refer to health department" />}
            label="Refer to health department"
          />
          <FormControlLabel
            control={<Checkbox value="Refer to primary care" />}
            label="Refer to primary care"
          />
          <FormControlLabel
            control={<Checkbox value="question13Selectiona3" />}
            label="Rapid antigen testing at school"
          />
          <FormControlLabel
            control={<Checkbox value="question13Selectiona4" />}
            label="Referral to testing"
          />
          <FormControlLabel
            control={<Checkbox value="question13Selection1a5" />}
            label="None of these Things"
          />
          <FormControlLabel
            control={<Checkbox value="question13Selection1a6" />}
            label="Other, specify"
          />
    </FormGroup>
  );
}

