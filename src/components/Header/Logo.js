import React from 'react';
import { Image } from 'semantic-ui-react'
import Wrapper from '../Wrapper';

const Logo = (props) => (
	<Wrapper>
		<figure className="logo">
			<Image 
				src={props.imgUrl ? props.imgUrl : 'assets/user-placeholder.png'} 
				verticalAlign='middle' 
				size='mini' 
				circular 
				avatar 
				title={props.imgTitle || 'User image'} 
			/>
		</figure>
		<span className="user-name">{props.firstName && props.lastName ? `${props.firstName} ${props.lastName}` : 'UserName'}</span>
	</Wrapper>
);

export default Logo;
