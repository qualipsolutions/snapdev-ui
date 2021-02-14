import React from 'react';
import { Section, Box, TextField } from '@snapdev-ui/core';
import Button from '@material-ui/core/Button';

const Component = () => {
  return (
    <Section title="Sign In" center>
      <Box p={2}>
        <TextField fullWidth label="Email Address" helperText="" />
        <TextField
          fullWidth
          label="Password"
          helperText="Must be between 6 and 30 characters long"
        />
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
            Sign In
          </Button>
        </div>
      </Box>
    </Section>
  );
};
export default Component;
