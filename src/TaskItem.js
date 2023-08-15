import React, { useState } from 'react'
import axios from 'axios'
import EditTask from './EditTask'



function TaskItem(props){
    const [toggle, setToggle] = useState(false)

    const {id, title, status, removeItem, editItem} = props 

    function handleRemove(id){
        console.log('remove', id)
        const confirmRemove = window.confirm('Are you sure')
            if(confirmRemove){
              axios.delete(`http://localhost:3033/api/tasks/${id}`)
                 .then((response)=>{
                     const result = response.data
                     removeItem(result.id)
                 })
                 .catch((err)=>{
                    alert(err.message)
                 })
            }
    }
  
    
    function handleToggle(){
        const result = !toggle
        setToggle(result)
    }

    return(
        <div >
            {
                toggle ? (<div> <EditTask id={id} 
                                          title={title} 
                                          status={status} 
                                          editItem={editItem} 
                                          handleToggle={handleToggle} /> 
                             <button onClick={handleToggle} > Cancel</button>
                          </div>) 
                         : (<div>   <h1> {title} </h1>
                              <button className='btn btn-danger' onClick={() => {handleRemove(id)}}> Remove</button>
                                        
                              <button className='btn btn-secondary' onClick={handleToggle}> Edit</button>
                            </div> )
                    }
          
        </div>
    )
}

export default TaskItem