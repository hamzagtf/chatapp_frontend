const UserMessageElement = ({body_css, dir, text_msg, image})=>{
	return (
		<div dir={dir} className="message">
			<img className="rounded-circle image m-3" width="70" height="70" src={image} />
			<p className={`text-break ${body_css}`}>
			{text_msg}
			</p>
		</div>


		)
}

export default UserMessageElement;