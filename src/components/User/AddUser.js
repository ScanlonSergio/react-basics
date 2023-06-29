import React, {useState, useRef} from 'react';

import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css'

const AddUser = (props) => {
    // Used to refer an element from the DOM like for eg when referred to an input field, it returns the object with different properties.
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (no-empty values)."
            });
            return;
        }
        if(+enteredUserAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (age > 0)."
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        // setEnteredUsername('');
        // setEnteredAge('');
    }

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // }
    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // }
    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>UserName</label>
                    <input id='username' type='text' ref={nameInputRef} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' ref={ageInputRef} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>       
    )
}

export default AddUser;