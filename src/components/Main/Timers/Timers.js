import React from 'react';
import { Card } from 'semantic-ui-react'
import Timer from './Timer';

const Timers = (props) => {
    return (
        <Card.Group itemsPerRow={3}>
            {
                props.timers.map(timer => {
                    return (
                        <Timer key={timer.id} {...timer} />
                    );
                })
            }
        </Card.Group>
    );
};

export default Timers;