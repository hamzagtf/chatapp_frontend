import SideNav from './sidenav'
import React, { useState } from 'react';

import MessageBody from './messagebody/messageBody'
import Info from './info'
import { useParams } from 'react-router-dom'
import FetchData from './connect';
const MainPage =()=>{
	const { id } = useParams()
	const [user, setUser] = useState(FetchData())
	const findUser = (users, id_)=>{
		 const index = users.findIndex((_id, index)=>{
			return _id.id === parseInt(id_)
		 })
		 return users[index]

	}
	const handleUserInfo = ()=>{
		return findUser(user, id)
		
	}
	return (
		<div className="container-fluid">
			<div className="row">
				
				<SideNav />
				<MessageBody id={id}/>
				<Info username={handleUserInfo().username} disc={handleUserInfo().disc} image={handleUserInfo().image} online={handleUserInfo().online ? 'online': "image"} msg_page={true}  />
				
				
			</div>
		</div>

		)
}

export default MainPage