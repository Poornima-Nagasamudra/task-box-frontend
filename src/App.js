import React from 'react'
import TaskContainer from './TaskContainer'

function App(props){

    return (
         <div className='container'>
           <center> <h1> Task box</h1> <hr/> </center>
            <TaskContainer />
         </div>
    )
}

export default App