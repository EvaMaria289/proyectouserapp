import "./Header.css"
const Header = ({modalHandle}) =>{

    return(
        <header>
          <h1>User API</h1>
          <button onClick={modalHandle}><i className="fa-regular fa-plus"></i> Create new user</button>
        </header>
    );
}

export default Header;