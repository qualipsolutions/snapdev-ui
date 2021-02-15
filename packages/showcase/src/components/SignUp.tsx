import React from 'react';
import { Section, Box, TextField, Checkbox } from '@snapdev-ui/core';
import Button from '@material-ui/core/Button';

const Component = () => {
  return (
    <Section title="Create Account" center>
      <Box p={2}>
        <TextField
          fullWidth
          label="Snapflow ID (username)"
          helperText="Must be between 4 and 30 characters long, and can only contain numbers, lowercase letters and hyphens."
        />
        <TextField fullWidth label="Email Address" helperText="" />
        <TextField
          fullWidth
          label="Password"
          helperText="Must be between 6 and 30 characters long"
          meta={{
            touched: true,
            error: 'Field is required',
          }}
        />
        <br />
        <Checkbox
          label="I have read and agree to the Terms of Service, Privacy Policy, and Data Processing Terms."
          // input={{ value: true }}
          helperText="You must accept to continue"
          meta={{
            touched: true,
            error: 'Field is required',
          }}
        />
        <TextField fullWidth label="Confirm Password" helperText="" />
        <br />
        <br />
        <div style={{}}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={false}
            style={{}}
          >
            Sign Up
          </Button>
        </div>
      </Box>
    </Section>
  );
};
export default Component;
