import Card from "../ui/Card";
import classes from './NewMeetUpForm.module.css';
import {useRef} from "react";

function NewMeetUpForm(props) {
    const titleUserInputRef = useRef();
    const imageUserInputRef = useRef();
    const addressUserInputRef = useRef();
    const descriptionUserInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault()
        const meetUpPayload = {
            title: titleUserInputRef.current.value,
            address: addressUserInputRef.current.value,
            description: descriptionUserInputRef.current.value,
            image: imageUserInputRef.current.value,
        }

        props.submitClicked(meetUpPayload);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meet Up</label>
                    <input type="text" required id='title' ref={titleUserInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="title">Meet Up Image</label>
                    <input type="text" required id='image' ref={imageUserInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id='address' ref={addressUserInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Meet Up Description</label>
                    <input type="text" required id='description' ref={descriptionUserInputRef} />
                </div>

                <div className={classes.actions}>
                    <button>Add</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetUpForm;
