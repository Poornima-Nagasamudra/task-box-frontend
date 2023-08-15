import React, {useState, useEffect} from 'react'

import {v4 as uuidv4} from 'uuid'

function TaskForm(props){
    const {formSubmit , isSaved, toggleIsSaved, id:slNo, title:taskTitle, status:taskStatus } = props

    const[id, setId] = useState(slNo ? slNo : uuidv4())
    const [title, setTitle] = useState(taskTitle ? taskTitle : '')
    const[status, setStatus] = useState(taskStatus ? taskStatus : false)
    
    useEffect(()=>{
      //  console.log('is saved', isSaved)
        if(isSaved){
            setId(uuidv4())
            setTitle('')
            setStatus(false)
            toggleIsSaved()
        }
    }, [isSaved, toggleIsSaved])

    function handleTitleChange(e){
        const result = e.target.value 
        setTitle(result)
    }

    function handleStatusChange(e){
        const result1 = e.target.checked
        setStatus(result1)
    }

    function handleSubmit(e){
        e.preventDefault()
        const formData = {
            id: id,
            title: title,
            status: status
        }
        formSubmit(formData)
    }

    return (
        <div>
          <center>  <h1>Add form</h1>
            <form onSubmit={handleSubmit}>
                <label> title</label> <br/>
                <input type="text" value={title}  onChange={handleTitleChange}  /> <br/>

                <input type="checkbox" checked={status} onChange={handleStatusChange} />
                <label > completed </label> <br/>

                <input type="submit" value="submit"/>
            </form>
            </center>
        </div>
    )
}

export default TaskForm