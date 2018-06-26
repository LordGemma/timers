import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import * as actionCreators from '../../store/actions/index';
import Logo from '../../components/Header/Logo';
import Currency from '../../components/Header/Currency';

import './Header.css';

const mapStateToProps = state => {
	const { avatar, firstName, lastName } = state.userData;
	return {
		avatar, 
		firstName, 
		lastName
	};
}

const mapDispatchToProps = dispatch => {
	return {
		userData: () => dispatch(actionCreators.userData()),	
	}
}

class Header extends Component {
	componentWillMount() {
		this.props.userData();
	}

	render() {
		return (
			<Menu attached='top'>
				<Menu.Item>
					<Logo
						imgUrl={this.props.avatar}
						firstName={this.props.firstName}
						lastName={this.props.lastName}
					/>
				</Menu.Item>
				<Menu.Menu position='right'>
					<Menu.Item>
						<Currency/>
					</Menu.Item>
				</Menu.Menu>
		  </Menu>
		);
	}
}

export default connect(
	mapStateToProps, mapDispatchToProps
)(Header);