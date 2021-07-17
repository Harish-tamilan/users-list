import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error,setError] = useState();

    const nameChangeHandler = (event)=>{
        const name = event.target.value;
        setEnteredName(event.target.value);
    }

    const ageChangeHandler = (event)=>{
        setEnteredAge(event.target.value);
    }

    const addUser = (event) =>{
        event.preventDefault();
        if(enteredName.trim().length==0 || enteredAge.trim().length==0)
        {
            setError({title:'Invalid Input', message:'Enter a valid name and age'});
            return;
        }
        if(+enteredAge<=0)
        {
            setError({title:'Invalid age', message:'Age must be greater than zero'});
            return;
        }
        console.log('inside addUser, uname is' + enteredName +', age is ' + enteredAge);
        props.add(enteredName, enteredAge);
        setEnteredAge('');
        setEnteredName('');
    }

    const RemoveModal = ()=>{
        setError(null);
    }

    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} removeModal={RemoveModal}/>}
            <Card className={classes.input}>
                <form onSubmit={addUser}>
                    <label htmlFor="name">Username</label>
                    <input type="text" id="name" onChange={nameChangeHandler} value={enteredName}/>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge}/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;