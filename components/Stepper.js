import * as React from 'react';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { theme } from './Theme';

const steps = [
  'Title',
  'Description',
  'Location',
  'Rating',
  'Amenities',
];

export default function CreateWizard({activeStep = 0}) {
  return (
    <Box sx={{ width: '100%', margin: '5rem 0' }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{
          '& .MuiStepIcon-root': {
            color: theme.palette.primary.lightGray,
            border: `2px solid ${theme.palette.primary.midGray}`,
            borderRadius: 50,
            width: '2.5rem',
            height: '2.5rem',
            margin: '-.5rem 0 0 0',
          },
          '& .MuiStepIcon-text': {
            fill: theme.palette.primary.black,
          },
          '& .MuiStepIcon-root.Mui-active': {
            border: `2px solid ${theme.palette.primary.main}`,
            color: theme.palette.primary.white,
          },
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel sx={{ fontWeight: 700 }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
