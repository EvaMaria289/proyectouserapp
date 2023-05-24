import UserCard from "../userCard/UserCard"
import Loading from "../loading/Loading";
import "./UserList.css"

const UserList = ({listSlice,modalDelete, loadUserToForm}) =>{
    return(
    <>
            <div className="userList">
        {listSlice? listSlice.map(user=> 
        
            <UserCard user={user} key={user.id} modalDelete={modalDelete} editHandle={loadUserToForm}/>

        ) :   <Loading/> }
         {/* ) : <p>No users to show</p>}  */}
        </div>
    </>
    )
}

export default UserList;