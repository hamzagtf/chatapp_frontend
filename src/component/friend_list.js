import { useState } from "react";
import { useParams } from "react-router-dom";
import UserInfoCard from "./home-page/userInfoCard";
import Info from './info'
import FetchData from "./connect";
const Friend_list = ()=>{
    const [users, setUsers] = useState(FetchData())
    const { id }= useParams()
    const findUser = (user, id_)=>{
        const index = user.findIndex((_id, index)=>{
           return _id.id === parseInt(id_)
        })
        return user[index]

   }
   const handleUserInfo = ()=>{
       return findUser(users, id)
       
   }
   const handleDelete = (id)=>{
       setUsers(users.filter((user)=> user.id !== id))
   }
    return(
        <div className="container-fluid">
            <div className="row ">
                
                <div className="col-8 p-5">
                    <div className="container ml-5">
                    <div className="info-cards-content">
                       
                        {

                            users.map(item=>(
                                item.online ? <UserInfoCard key={item.id} user_id={item.id} username={item.username} online="online" image={item.image} onDelete={handleDelete}/>
                                 :
                                 <UserInfoCard key={item.id} user_id={item.id} username={item.username} online="image" image={item.image} onDelete={handleDelete} />

                            ))
                        }
                    </div>
                </div>
                
                

                </div>
                
                {
                   
                   id && <Info username={handleUserInfo().username} disc={handleUserInfo().disc} image={handleUserInfo().image} online={handleUserInfo().online ? 'online': "image"} />
                }
                
                

               
            </div>
        </div>
        
    )
}
export default Friend_list;