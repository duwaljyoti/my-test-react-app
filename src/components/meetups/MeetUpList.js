import MeetUpItem from "./MeetUpItem";

function MeetUpList(props) {
    return <div>
        {props.meetUps.map(meetUp => <MeetUpItem meetUp={meetUp} key={meetUp.id}/>)}
    </div>
}

export default MeetUpList;
