import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'
import Timers from '../../components/Main/Timers/Timers';

const mapStateToProps = (state) => {
    const { timers } = state;
    return {
        timers
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

class Main extends Component {
    render() {
        console.log(this.props.timers);
        return (
            <div>
                <Container>
                    <Timers timers={this.props.timers} />
                </Container>
            </div>
        );
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Main);