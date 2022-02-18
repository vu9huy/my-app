import { useState } from 'react'
import AddTodo from './AddTodo';
import DisplayTodo from './DisplayTodo';

const TodoList = () => {
  const [job, setJob] = useState('');
  const [todo, setTodo] = useState([1, 2, 3])

  function handleChange(event) {
    setJob(event.target.value)
    // console.log(job);
  }
  function handleAddJob() {
    setTodo([...todo, job])
    setJob('')
  }
  function handleDeleteJob(id) {
    let todoCur = [...todo]
    todoCur = todoCur.filter((task, index) => index !== id)
    setTodo(todoCur)
  }
  return (
    <div>
      <AddTodo
        job={job}
        handleChange={handleChange}
        handleAddJob={handleAddJob}
      />
      <DisplayTodo
        todo={todo}
        setTodo={setTodo}
        handleDeleteJob={handleDeleteJob}
      />

    </div>
  );
}
export default TodoList;