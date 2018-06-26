import React from 'react';
import { Grid } from 'semantic-ui-react'

const Currency = () => (
	<Grid divided>
	<Grid.Row  textAlign='center'>
		<Grid.Column width={4}>
        	Currency 
		</Grid.Column>
		<Grid.Column width={3}>
			22
		</Grid.Column>
		<Grid.Column width={3}>
			33
		</Grid.Column>
		<Grid.Column width={3}>
			44
		</Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Currency;
