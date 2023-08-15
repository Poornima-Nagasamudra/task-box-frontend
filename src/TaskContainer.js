import React, {useState, useEffect} from 'react'

import TasksList from './TasksList'
import axios from 'axios'
import AddTask from './AddTask'

function TaskContainer(props){
    const[tasks, setTasks] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3033/api/tasks')
            .then((response)=>{
                const result = response.data 
                setTasks(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    }, [])

    function addItem(task){
          setTasks([...tasks, task])
    }

    function removeItem(id){
        const result = tasks.filter((task)=>{
            return task.id !== id
        })
        setTasks(result)
    }

    function editItem(task){
          const result = tasks.map((t)=>{
              if(t.id === (task.id)){
                return {...t, ...task}
              }else {
                 return {...t}
              }
          })
          setTasks(result)
    }

    return(
        <div>
           <TasksList tasks={tasks} removeItem={removeItem} editItem={editItem} />
           <AddTask addItem={addItem} />
        </div>
    )
}

export default TaskContainer