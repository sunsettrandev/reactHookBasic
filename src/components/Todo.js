import { useState } from "react";

const Todo = () => {
  let [emptyInput, setemptyInput] = useState('');
  let [todos, setTodos] = useState([
    { id: 'todo1', title: 'Learning React.js' },
    { id: 'todo2', title: 'Doing React.js' },
    { id: 'todo3', title: 'Runing React.js' }
  ]);

  // useEffect(() => {
  //   console.log('check todos')
  // }, [todos])
  // useEffect(() => {
  //   console.log('check input change')
  // }, [emptyInput])

  const handleEventChange = (event) => {
    setemptyInput(event.target.value);
  }

  const handleEventClick = (event) => {
    if (!emptyInput) {
      alert('Missing title!');
      return;
    }
    let newTodo = {
      id: 'todo' + Math.floor(Math.random() * 100),
      title: emptyInput
    }
    setTodos([...todos, newTodo]);
    setemptyInput('');
  }

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter(item => item.id !== id)
    setTodos(currentTodos);
  }
  const handleDeleteTodos = (id) => {
    deleteDataTodo(id)
  }
  return (
    <>
      <input type="text" value={emptyInput} onChange={(event) => { handleEventChange(event) }} />

      <input type="button" value="Add New" onClick={(event) => { handleEventClick(event) }} />
      <p> List Todo </p>
      <table className='todos-content'>
        <tbody>
          {todos && todos.length > 0 && todos.map((item, index) => {
            return (
              <tr className='todo-child' key={item.id}>
                <td>{index + 1} -</td>
                <td>{item.title}</td>
                <td><span onClick={() => handleDeleteTodos(item.id)}>x</span></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Todo;