import { useState } from "react"

const Info = ({username, disc, image, online, msg_page})=>{

	return (
		<div className="col">
			<div className={msg_page ? 'info__' : 'info'}>
				<div className="info-image" >
					<img className="card-img blur"  src={image} />

				</div>
				<div className="d-flex justify-content-center mt-10">
					<img className={`rounded-circle ${online}`} width="150" height="150" src={image} />
				</div>
			
				<h5 className=" text-center white mt-4">{username}</h5>
				<p className="text-center white mt-5">{disc}</p>
				
				
			</div>
		</div>

		)
}
export default Info