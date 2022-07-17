const TodoItem = ({
    handleToggleTask,
    item
}) => {
    const handleClick = (e) => {
        handleToggleTask(e.currentTarget.id)
    }

    return <li id={item.id} onClick={handleClick} className={item.isComplete ? "todo strike" : "todo"}>{item.text}</li>
}

export default TodoItem