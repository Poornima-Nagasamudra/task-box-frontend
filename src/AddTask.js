import React, { useState } from 'react'
import TaskForm from './TaskForm'
import axios from 'axios'

const AddTask = (props)=>{
    const {addItem} = props 
    const [isSaved, setIsSaved] = useState(false)

    function formSubmit(task){
         console.log('new form',task)
         axios.post('http://localhost:3033/api/tasks', task)
            .then((response)=>{
                 const result = response.data
                 addItem(result)
                 setIsSaved(true)
            })
            .catch((err)=>{
                 alert(err.message)
            })
    }

    function toggleIsSaved(){
        setIsSaved(false)
    }

    return(
        <div>
            <TaskForm formSubmit={formSubmit} isSaved={isSaved} toggleIsSaved={toggleIsSaved} />
        </div>
    )
}

export default AddTask