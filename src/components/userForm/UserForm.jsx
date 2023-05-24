import { useForm } from "react-hook-form";
import "./UserForm.css"
import { useState, useEffect, useRef} from 'react'

const UserForm = ({modalHandle, formRef, create, initialData, isEditing}) =>{
    const{register, handleSubmit, reset} = useForm({defaultValues: initialData});

       ///
       const [openEye, setOpenEye] = useState(false)
    const showPassword = () =>{

      let show = document.querySelector('#password')

    if(show.type =="password"){
        show.type = "text"
        setOpenEye(true);
    }else{
        show.type = "password"
        setOpenEye(false);
    }
}

    return(
        <div className="formContainer">
                <form onSubmit={handleSubmit(create)} ref={formRef}>
                    <button className="modalCLoser" type="button" onClick={modalHandle}>x</button>
                    <div className="formTitle">
                    {isEditing? <h2>Edit user</h2> :<h2>Create user</h2>}
                    </div>
                    <div className="formFirst_name">
                    <label htmlFor="first_name">Name</label>
                    <input id="first_name" placeholder="Juanito" {...register("first_name")}/>
                    </div>
                    <div className="formLast_name">
                    <label htmlFor="last_name">Last Name</label>
                    <input id="last_name" placeholder="Perez" {...register("last_name")}/>
                    </div>
                    <div className="formEmail">
                    <label htmlFor="email">Email</label>
                    <input id="email" placeholder="Juanito@hotmail.com" {...register("email")}/>
                    </div>
                    <div className="formPassword">
                    <label htmlFor="password">Password</label>
                    <div className="password">
                    <input type="password" id="password" placeholder="*******" {...register("password")}/>
                    <button type="button" onClick={showPassword}>{openEye? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}</button>
                    </div>
                    </div>
                    <div className="formBirthday">
                    <label htmlFor="birthday">Birthday</label>
                    <input type="date" id="birthday" {...register("birthday")}/>
                    </div>
                    <input type="submit"  className="btnSubmit" value={isEditing?"Save changes" :"Create a new user"}/>
                </form>
        </div>
    );
}

export default UserForm;