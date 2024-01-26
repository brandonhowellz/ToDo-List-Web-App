function Todo({ todo, index, remove }) {
  return (
    <div className="todo">
      <input type="checkbox" />
      <span className="todo-text">{todo.text}</span>
      <button onClick={() => remove(index)}>Remove</button>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    { text: 'Learn React', isCompleted: false },
    { text: 'Meet friend for lunch', isCompleted: false },
    { text: 'Build todo app', isCompleted: false },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} remove={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
