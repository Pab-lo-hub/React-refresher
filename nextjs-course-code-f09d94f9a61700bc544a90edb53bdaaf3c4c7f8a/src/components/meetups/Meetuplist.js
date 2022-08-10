import MeetupItem from './MeetupItem';
import classes from './MeetupItem.module.css';

function Meetuplist(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map(meetup => (
                <MeetupItem
                    key={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    adress={meetup.adress}
                    description={meetup.description}
                />
            ))}
        </ul>
    )
}

export default Meetuplist;