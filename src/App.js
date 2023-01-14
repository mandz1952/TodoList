import {useState} from "react";
import './App.css';
import Header from "./commponents/Header/Header";
import TodoForm from "./commponents/TodoFrom/TodoForm";
import TodoList from "./commponents/TodoList/TodoList";
function App() {

    const [todo, setTodo] = useState([
        {
            id: 1,
            title: 'first todo',
            status: true,
        }
    ])

  return (
    <div>
      <Header />
      <TodoForm todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
