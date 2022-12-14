import Card from '../UI/Card';
import classes from './NewMeetupForm.module.css';
import { useRef } from 'react';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const adressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = adressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData ={
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        } 

        props.onAddMeetup(meetupData);
    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type="text" required id='title' ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup image</label>
                <input type="url" required id='image' ref={imageInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='Adress'>Adress</label>
                <input type="text" required id='Adress' ref={adressInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='Description'>Description</label>
                <textarea type="text" required id='Description' ref={descriptionInputRef} />
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}

export default NewMeetupForm;