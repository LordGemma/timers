import React from 'react';
import { Card, Button, Divider } from 'semantic-ui-react'
// import { Icon, Label } from 'semantic-ui-react'

const Timer = (props) => (
    <Card>
        <Card.Content>
            <Card.Header>Matthew Harris</Card.Header>
            <Card.Meta>Co-Worker</Card.Meta>
            <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
        </Card.Content>
        <Divider />
        <Button attached='bottom'>Stop Timer</Button>
    </Card>
);

export default Timer;
