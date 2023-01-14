import {useState} from "react";
import * as uuid from "uuid";
import addimg from "../../img/add.svg"
import './TodoForm.module.css'
function TodoForm({todo, setTodo}) {

    const [value, setValue] = useState('')

    function addTodo() {
        setTodo(
            [...todo, {
                id: uuid.v4(),
                title: value,
                status: true,
            }]
        )
    }

    return (
        <div>
            <input
                placeholder="Введите задачу"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={addTodo}><img src={addimg} /></button>
        </div>
    )
}

export default TodoForm