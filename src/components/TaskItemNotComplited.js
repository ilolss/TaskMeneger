import React from 'react';
import styles from "../styles/TaskItemNotComplited.module.css";

const TaskItemNotComplited = (props) => {
    return (
        Date.parse(props.task.date) > Date.now()
            ?
            <div className={styles.taskItem}>
                <input type='checkbox' onChange={() => props.complit(props.task)}/>

                <div>{props.index + 1}. {props.task.text}</div>

                <div>Deadline: {props.task.date}</div>

                <button className={styles.btn} onClick={() => props.del(props.task)}>&times;</button>
            </div>
            :
            <div className={styles.taskItem} style={{background: "#ff2025"}}>
                <input type='checkbox' onChange={() => props.complit(props.task)}/>

                <div>{props.index + 1}. {props.task.text}</div>

                <div>Deadline: {props.task.date}</div>

                <button className={styles.btn} style={{background: "black", color: "white"}} onClick={() => props.del(props.task)}>
                    &times;
                </button>
            </div>
    );
};

export default TaskItemNotComplited;