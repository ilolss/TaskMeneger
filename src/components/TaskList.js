import React, {useState} from 'react';
import AddTask from "./AddTask";
import TaskItemComplited from "./TaskItemComplited";
import TaskItemNotComplited from "./TaskItemNotComplited";

const TaskList = () => {

    // let [taskList, setTaskList] = useState([
    //     {id: 1, text: "Task1", isComplited: false,},
    //     {id: 2, text: "Task2", isComplited: false,},
    //     {id: 3, text: "Task3", isComplited: false,},
    // ]);

    const [taskList, setTaskList] = useState([]);

    let addTask = function(newTask){
        setTaskList([...taskList, newTask]);
    }

    let delTask = function(task){
        setTaskList(taskList.filter(item => item.id !== task.id))
    }

    let complitTask = (task) => {

        let cmp = function(item1, item2){
            if(item1.isComplited === item2.isComplited) return 0;
            if(item1.isComplited > item2.isComplited) return 1;
            if(item1.isComplited < item2.isComplited) return -1;
        }

        setTaskList(taskList.map(item => {
            if(item.id === task.id){
                item.isComplited = !item.isComplited
            }
            return item
        }))

        setTaskList([...taskList].sort(cmp))
    }

    return (
        taskList.length !== 0
            ?
            <div>
                <h1 style={{textAlign: 'center', color: 'rgba(5,10,100,0.94)'}}>Добавить задачу</h1>
                <AddTask add={addTask}/>
                <h1 style={{textAlign: 'center', color: 'rgba(5,10,100,0.94)'}}>Задачи:</h1>
                {taskList.map(function(task, index) {
                    if (task.isComplited === true) {
                        return (
                            <TaskItemComplited
                                task={task}
                                index={index}
                                key={task.id}
                                del={delTask}
                                complit={complitTask}
                            />
                        )
                    } else {
                        return (
                            <TaskItemNotComplited
                                task={task}
                                index={index}
                                key={task.id}
                                del={delTask}
                                complit={complitTask}
                            />
                        )
                    }
                })}
            </div>
            :
            <div>
                <h1 style={{textAlign: 'center', color: 'rgba(5,10,100,0.94)'}}>Добавить задачу</h1>
                <AddTask add={addTask}/>
                <h1 style={{textAlign: 'center', color: 'rgba(5,10,100,0.94)'}}>Все задачи выполнены!</h1>
            </div>
    );
};

export default TaskList;