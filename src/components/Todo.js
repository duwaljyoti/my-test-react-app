import Modal from "./Modal";
import Backdrop from "./Backdrop";
import {useState} from "react";

function Todo(props) {
    // why two here
    const [ modalIsOpen, setModelIsOpen ] = useState(false)
    function deleteHandler() {
        setModelIsOpen(true)
    }

    function closeHandler() {
        console.log(2323)
        setModelIsOpen(false)
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="className">
                <button className='btn'
                        onClick={deleteHandler}
                >Delete</button>
            </div>
            { modalIsOpen && <Modal deleteHandler={deleteHandler} cancelHandler={closeHandler} />}
            { modalIsOpen && <Backdrop onClick={closeHandler} />}
        </div>
    )
}

export default Todo;
