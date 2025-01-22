import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const Home = () => {

  return (<>
  <h1>Task Management System</h1><br />
    <div>
<Link to="/add-task">Add Task
</Link>    </div>

</>
  )
}

export default Home