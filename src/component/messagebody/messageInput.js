import React, { useState } from 'react';

const MessageInput = ({add_Message})=>{
	const [message, setMessage ] = useState('')
	const handleSubmit = (e)=>{
		e.preventDefault()
		add_Message(message)
		setMessage('')

	}
	return (
		<div className="message-input ">
			<form onSubmit={handleSubmit}>
				<input type="text" className="form-control" value={message} placeholder='message' onChange={(e)=>setMessage(e.target.value)} />
				<button type='submit' className="btn bg-white">
					<i className="fa-solid fa-paper-plane "></i>

				</button>
			</form>
		</div>

		)
}
export default MessageInput;