

const DisplayTodo = (props) => {
    function deleteJobFromChild(id) {
        props.handleDeleteJob(id)
    }
    return (
        <div>
            <ul>
                {props.todo.map((task, index) => {
                    return (
                        <li onClick={(event) => deleteJobFromChild(index)} key={index}>{task}</li>
                    )
                })}
            </ul>
        </div>
    )

}

export default DisplayTodo;