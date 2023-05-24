import UserCard from "../userCard/UserCard"
import Loading from "../loading/Loading";
import "./UserList.css"

const UserList = ({listSlice,modalDelete, loadUserToForm}) =>{
    return(
    <>
            <div className="userList">
        {listSlice != 0? listSlice.map(user=> 
        
            <UserCard user={user} key={user.id} modalDelete={modalDelete} editHandle={loadUserToForm}/>

         ) : <div className="loadingContainer"> 
                <h1>No users to show</h1> 
                <Loading/> 
            </div> }
        </div>
    </>
    )
}

export default UserList;