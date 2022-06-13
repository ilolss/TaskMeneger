import React, {useState} from 'react';
import styles from '../styles/AddTask.module.css'

const AddTask = (props) => {

    const [text, setText] = useState("");
    const [date, setDate] = useState("");

    let addFunction = function(){
        if(text === ""){
            return
        }
        props.add({id: Date.now(), text: text, isComplited: false, date: date, })
        setText("")
    }

    return (
        <div className={styles.allAddTask}>
            <input
                className={styles.input}
                type='text'
                value={text}
                placeholder={"New task"}
                onChange={event => setText(event.target.value)}
            />
            <input
                className={styles.date}
                type={"datetime-local"}
                onChange={event => setDate(event.target.value)}
            />
            <button className={styles.button} onClick={addFunction}>Add</button>
        </div>
    );
};

export default AddTask;