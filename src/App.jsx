import { useState, useEffect, useRef} from 'react'
import './App.css'
import Header from './components/header/Header'
import Modal from './components/modal/Modal'
import getUser from './services/getUser'
import createUser from './services/createUser'
import UserCard from './components/userCard/UserCard'
import deleteUser from './services/deleteUser'
import updateUser from './services/updateUser'
import UserForm from './components/userForm/UserForm'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer} from 'react-toastify'
import Pagination from './components/pagination/Pagination';
import { usePagination } from './hooks/usePagination'
import Footer from './components/footer/Footer'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [users, setUsers] = useState(null)
  const formRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false)
  const [initialData, setInitialData] = useState(null)

  //const [quatityPagination, setQuatityPagination] = useState(10);

  //const [pageNumber, listSlice, pages, changePageTo] = usePagination(users, quatityPagination)


  const loadData = async () =>{
      const data = await getUser()
      setUsers(data);
  }

   const createOrUpdate = async(data) =>{
   
      if(initialData == null){
        create(data)
      }
      else(
        await updateUser(data.id, data)
        
      )
      loadData();
      modalHandle();
   }
  const create = async (data)=>{
    await createUser(data)
    loadData();

  }

  const deleteHandle = async(user) =>{
      await deleteUser(user.id);
      loadData();
      
  }

  const modalHandle = () =>{
    if(isVisible){
      setIsVisible(false)
      setInitialData(null)
    }
    else{
      setIsVisible(true)
    }
  }
  const createValidation = () =>{
      setIsEditing(false)
      modalHandle();
  }
  const loadUserToForm = (user) =>{
     setIsEditing(true)
      modalHandle();
      setInitialData(user)  
  }

  useEffect(()=>{
    loadData();
  },[]);

  return (
    <>
    <ToastContainer/>
        <Header modalHandle={createValidation} setIsEditing={setIsEditing} />

        <Modal isVisible={isVisible} >
          <UserForm  modalHandle={modalHandle} 
          formRef={formRef} create={createOrUpdate} 
          initialData={initialData}
          isEditing={isEditing}/>
        </Modal>

        <div className="userList">
        {users? users.map(user=> 
        
            <UserCard user={user} key={user.id} deleteHandle={deleteHandle} editHandle={loadUserToForm}/>

        ) : <p>No users to show</p>}
        </div>

        {/* <Pagination pages ={pages} 
        changePageTo={changePageTo} 
        pageNumber={pageNumber} 
        setQuatityPagination={setQuatityPagination}/>  */}

        <Footer/>
    </>
  )
}

export default App
