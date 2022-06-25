import SearchUser from './sidenav/searchUser'
import React, { useState } from 'react';

import FriendMsgList from './sidenav/friend_message_list'
import { Link } from 'react-router-dom';
import FetchData from './connect';

const SideNav = ()=>{
	const [user, setUser] = useState(FetchData());
	return(
		<div className="col">
			<SearchUser />
			<div className="friend-msg-list-container">
				{
					
					user.map((item) =>(
						
						<Link to={`/messages/${item.id}`} key={item.id}>
							<FriendMsgList key={item.id} username={item.username} image={item.image} online={item.online} />
						</Link>
					
				
					))
				}
			</div>
			
			
		
			
			
			
		</div>

		)

}
export default SideNav