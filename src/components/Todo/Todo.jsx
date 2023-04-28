import { useState } from 'react'

const Todo = () => {
    const [newTodo , setNewTodo] = useState('');
    const [editingTodo , seteditingTodo] = useState(null);

    const [todo, setTodo] = useState( () => {
        const storedTodo  = localStorage.getItem('todo');
        return storedTodo ? JSON.parse(storedTodo) : [];
    });

    const handleNewTodoChange = (e) => {
        setNewTodo(e.target.value)
    }
    
    const handleNewTodoSubmit = (e) => {
        e.preventDefault();

        if (!newTodo.trim()) return
        
        if(editingTodo !== null){
            const updateToDo = todo.map((todo) => {
                if (todo.id === editingTodo) {
                    return{...todo, text: newTodo}
                } else {
                    return todo
                }
            })
            setNewTodo(updateToDo);
            seteditingTodo(null);
        } else{
            setTodo([...todo, {id: Date.now(), text: newTodo}])
            setNewTodo('')
        }
    }


    
    localStorage.setItem('todo', JSON.stringify(todo));
    
    const handleDeleteToDo = (id) => {
        const deleteToDo = todo.filter((item) => item.id !== id);
        setTodo(deleteToDo)
    }
    const handleEditToDo = (id) => {
        const todoEdit = todo.find((todo) => todo.id === id);
        seteditingTodo(id)
        setNewTodo(todoEdit)
    }

  return (
    <div>
        <h1>To Do List</h1>
        <form onSubmit={handleNewTodoSubmit}>
            <label>
                lastname :
                <input type='text' value={newTodo} onChange={handleNewTodoChange}  />

            </label>
            <button type='submit'>Submit</button>
        </form>
        <ul>
            {
                todo.map((item) => (
                    <li key={item.id}>
                        <span>{item.text}</span>
                        <button onClick={() => handleDeleteToDo(item.id)}>Delete</button>
                        <button onClick={() => handleEditToDo(item.id)}>Edit</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Todo;