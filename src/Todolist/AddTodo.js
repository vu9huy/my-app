

const AddTodo = (props) => {
    const { job, handleAddJob, handleChange } = props;
    function handleChangeChild(event) {
        handleChange(event)
    }
    function handleAddJobChild() {
        handleAddJob()
    }
    return (
        <div>
            <input value={job} onChange={(event) => handleChangeChild(event)}></input>
            <button onClick={() => handleAddJobChild()}>Submit</button>
        </div>
    )
}

export default AddTodo;