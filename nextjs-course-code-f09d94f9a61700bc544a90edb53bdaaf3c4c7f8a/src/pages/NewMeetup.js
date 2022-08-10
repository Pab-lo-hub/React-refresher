import NewMeetupForm from '../components/meetups/NewMeetupForm';
import {useHistory} from 'react-router-dom';

function NewMeetup() {
    const history = useHistory();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-refresher-682c0-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'content-type': 'application/json'
                }
            }
            ).then(() => {
                history.replace('/');
            });
    }

    return ( 
    <section>
        <h1>Add a new meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/> 
    </section>
    );
}


export default NewMeetup;