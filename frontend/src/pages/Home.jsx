import React,{useState} from 'react'

const Home = () => {
    const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [status, setstatus] = useState('Hyundai');
  const [proirity, setproirity] = useState('');
  const [createdAt, setcreatedAt] = useState('');
//   const navigate = useNavigate();

  const taskSubmit = async (taskdetails) => {
    const res = await fetch(`/api/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskdetails),
    });
    if (res.status === 201) {
      alert('task added successfully');
    }  else {
      alert('task not added');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskdetails = {
      title,
      description,
      status,
      proirity,
      createdAt,
    };
    taskSubmit(taskdetails);
  };
  return (
    <div className='justify-center bg-blue  w-[400px] h-[500px]'>
        <form action="" onSubmit={handleSubmit}>
            <p>Add Task</p>
            <br />
            <label htmlFor="" >Title</label><br />
            <input type="text" id='title' name='title' placeholder='Enter Task Title' 
              value={title}
              onChange={(e) => settitle(e.target.value)}/><br />
            <label htmlFor="">Description</label><br />
            <input type="text"  id="description" name='description' placeholder='Enter Task Description'
              value={description}
              onChange={(e) => setdescription(e.target.value)} /><br />
            <label htmlFor="" >Status</label><br />
            <select name="" id=""
                        value={status}
                        onChange={(e) => setstatus(e.target.value)}>
                <option value="pending" >pending</option>
                <option value="in-progress" >in-progress</option>
                <option value="completed" >completed</option>
            </select>
            <label htmlFor="" >Proirity</label><br />
            <select name="" id=""
            value={proirity}
            onChange={(e) => setproirity(e.target.value)}>
                <option value="pending" >low</option>
                <option value="in-progress" >medium</option>
                <option value="completed" >high</option>
            </select>
            <label htmlFor="">Date and time</label><br />
            <input type="date"  value={createdAt}
              onChange={(e) => setcreatedAt(e.target.value)}/>
            <button type="submit">Add Task</button>
        </form>

    </div>
  )
}

export default Home