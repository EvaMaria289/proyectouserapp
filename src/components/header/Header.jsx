import "./Header.css"
const Header = ({modalHandle, users}) =>{

    return(
      <>
        <header>
          <h1>User API</h1>
          <button onClick={modalHandle}><i className="fa-regular fa-plus"></i> Create new user</button>
          
        </header>
        {users !=0 && <p className="registeredUsers">{users.length} registered users</p>} 
      </>
    );
}

export default Header;