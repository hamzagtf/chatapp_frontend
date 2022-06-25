const FriendMsgList = ({username, image, online})=>{
	return (
		
		<div className="friend-msg-list float-start ">
			<img className="rounded-circle image m-3" width="70" height="70" src={image} />
			<div className="mt-4">
				<div className="d-flex ">
					<h5>{username}</h5>
					{
						online && <span className="rounded-circle mt-2 ml-2 bg-success" style={{ width: '8px',height: '8px' }}></span>
					}
					
				</div>
				<p className="text-truncate" style={{ width: '150px' }}>
					Lorem ipsum  dolor aute irure dolor in reprehenderit in voluptate velit
					Lorem ipsum  dolor aute irure dolor in reprehenderit in voluptate velit
					Lorem ipsum  dolor aute irure dolor in reprehenderit in voluptate velit
				</p>
				
			</div>
			<div className="float-end m-4">
			<span>8:50 am</span>
		</div>
			
			
		</div> 
	)

}
export default FriendMsgList;