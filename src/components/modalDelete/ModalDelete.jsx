import "./ModalDelete.css"
const ModalDelete = ({setdeleteConfirmModal, deletedUser, deleteHandle}) =>{
    return(
    <>
    <div className="bigModal">
        <div className="modalDelete">
            <div className="messageDeleteModal">
                <h2>Are you sure you want to delete this user?</h2>
            </div>
            <i className="fa-solid fa-user-xmark userIcon"></i>
            <div className="btnDeleteModal">
            <button onClick={()=>setdeleteConfirmModal(false)}>Cancel</button>
            <button onClick={()=>deleteHandle(deletedUser)}>Delete</button>
            </div>
        </div>
    </div>
    </>
    )
}

export default ModalDelete;