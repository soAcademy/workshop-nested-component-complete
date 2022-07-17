import TodoItem from "./TodoItem"

const TodoList = ({
    handleToggleTask,
    items
}) => (
    <ul>
        {items.map(item => (
            <TodoItem key={item.id} item={item} handleToggleTask={handleToggleTask} />
        ))}
    </ul>
)

export default TodoList