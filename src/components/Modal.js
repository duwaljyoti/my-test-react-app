function Modal(props) {
    return (
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn btn--alt' onClick={props.cancelHandler}>Cancel</button>
            <button className='btn' onClick={props.deleteHandler}>Confirm</button>
        </div>
    )
}

export default Modal;
