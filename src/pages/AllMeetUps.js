import MeetUpList from "../components/meetups/MeetUpList";
import {useEffect, useState} from "react";

function  AllMeetUpsPage() {
    const dummyImageLink = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg';
    const [isLoading, setIsLoading ] = useState(true);
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch(
            'https://learn-react-api-c335d-default-rtdb.firebaseio.com/meetups.json'
        ).then(data => {
            return data.json()
        }).then(data => {
            const apiEvents = Object.entries(data).map(singleData => {
                return {
                    id: singleData[0],
                    ...singleData[1],
                    image: dummyImageLink,
                }
            })
            setEvents(apiEvents)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <div>
            <h1>All Meet ups</h1>
            Loading
        </div>
    }

    return <div>
        <h1>All Meet ups</h1>
        <MeetUpList meetUps={events}/>
    </div>
}

export default AllMeetUpsPage;
