import React from 'react'
import TaskItem from './TaskItem'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const TasksList = (props) =>{
    const {tasks, removeItem, editItem } = props

    return(
        <div >
            
            {tasks.length === 0 ? (<div><h1> No task found </h1>
                                    <h1>Add your first task</h1></div>) 

                                : (<div className="max-auto ">
                                  <center>  <h1> My Tasks - {tasks.length} </h1> </center> 
                                    {
                                        tasks.map((task)=>{
                                            return(
                                              <center><TaskItem className="list-group-item" key={task.id} {...task} 
                                              removeItem={removeItem} 
                                              editItem={editItem} /> </center>  
                                            )
                                        })
                                    }
                                    <hr/>
                                    </div> )
            }
        </div>
    )
}

export default TasksList