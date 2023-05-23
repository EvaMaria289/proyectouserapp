import './Modal.css'
const Modal = ({isVisible, children}) =>{ 
    return(
        <>
            {isVisible && <div className="modal">
                {children}
                </div>}
        </>
        
    );
}

export default Modal;