import "./UserCard.css";

const UserCard = ({user, id, modalDelete, editHandle}) =>{
    return(
    <>
        <div className="user_card" key={id}>
          <div className="formName">
            <h2>{user.first_name + " " + user.last_name}</h2>
          </div>
          <div className="formEmailBirthday">
            <div className="formEmail">
              <p>EMAIL</p>
              <p>{user.email}</p>
            </div>
            <div className="formBirthday">
              <p>BIRTHDAY</p>
              <p><i className="fa-solid fa-gift"></i> {user.birthday}</p>
            </div>
          </div>
          <div className="formBtn">
            <button className="btnDelete" onClick={()=> modalDelete(user)}><i className="fa-solid fa-trash-can"></i></button>
            <button className="btnEdit" onClick={()=> editHandle(user)}><i className="fa-solid fa-pen"></i></button>
          </div>
        </div>
    </>
    )
}

export default UserCard;