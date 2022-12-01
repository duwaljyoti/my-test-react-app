import NewMeetUpForm from "../components/meetups/NewMeetUpForm";
import {useNavigate} from 'react-router-dom';

function  NewMeetUpPage() {
    const useNavigateObject = useNavigate();
    function addMeetUpHandler(meetUpPayload) {
        fetch(
            'https://learn-react-api-c335d-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetUpPayload),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            // eslint-disable-next-line no-restricted-globals
            location.replace('/')
        })
    }

    return <div>
        <NewMeetUpForm submitClicked={addMeetUpHandler} />
    </div>
}

export default NewMeetUpPage;
