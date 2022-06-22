

const Todo = (props) => {
  const todos = props.todos;
  return (
    <table className='todos-content'>
      <tbody>
        {todos && todos.length > 0 && todos.map((item, index) => {
          return (
            <tr className='todo-child' key={item.id}>
              <td>{index + 1} -</td>
              <td>{item.title}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Todo;