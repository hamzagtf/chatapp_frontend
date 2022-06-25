import { Link } from "react-router-dom";

const UserInfoCard = ({username, user_id, online, image, home, onDelete})=>{
    let home_link = home ?'/home/' : '/friend_list/'
    return (
        
        
            <div className="card m-1" style={{width: 'fit-content'}} >
                <Link to={`${home_link}${user_id}`}>
                    <div className="d-flex justify-content-center">
                        <img className={`rounded-circle ${online}`} width="150" height="150" src={image}/>
                    </div>
                    <h4 className="card-title text-center mt-3">
                    {username}  
                    </h4>
                </Link>
                <div className="btn-group d-flex justify-content-center card-footer">
                <Link to={`/messages/${user_id}`}> 
                    <button className="btn bg-maincolor btn-sm m-1">message</button>
                </Link> 
                {
                    home ? <button className="btn bg-maincolor btn-sm m-1">send request</button> 
                    :
                    <button onClick={() => onDelete(user_id)} className="btn bg-maincolor btn-sm m-1">cancel request</button>
                }
                    
                </div>
            </div>
        
        

    )
}
export default UserInfoCard;