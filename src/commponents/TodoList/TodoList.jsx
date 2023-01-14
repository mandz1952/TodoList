import {useState} from "react";
import * as uuid from "uuid";
import save from "../../img/save.svg"
import editimg from "../../img/edit.svg"
import deleteimg from "../../img/delete.svg"
import closeimg from "../../img/close.svg"
import openimg from "../../img/open.svg"
import c from "./TodoList.module.css"

function TodoList({todo, setTodo}) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

    function deleteTodo(id) {
        let newTodo = [...todo].filter( item => item.id!=id)
        setTodo(newTodo)
    }

    function closeTodo (id) {
        let newTodo = [...todo].filter(item => {
            if (item.id == id) {
                item.status = !item.status
            }
            return item
            }
        )
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    function addTodo(id, title) {
        let newTodo = [...todo].map( item => {
            if( item.id == id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

    return (
        <div>
            {
                todo.map( item => (
                    <div key={item.id}>
                        <div className={c.list} >
                            {
                                edit == item.id ?
                                    <div>
                                        <input
                                            value={value}
                                            onChange={ (e) => setValue(e.target.value)}/>
                                    </div>
                                :
                                    <div className={`${c.listItem} ${item.status ? "trueStatus" : "falseStatus"}`}>{item.title}</div>
                            }
                            {
                                edit == item.id ?
                                    <div>
                                        <button onClick={() => addTodo(item.id, item.title)}><img src={save} /></button>
                                    </div>
                                    :
                                    <div>
                                        <button onClick={() => deleteTodo(item.id)}><img src={deleteimg} /></button>
                                        <button onClick={() => editTodo(item.id, item.title)}><img src={editimg} /></button>
                                        <button onClick={() => closeTodo(item.id)}>{item.status ? <img src={openimg}/> : <img src={closeimg} />}</button>
                                    </div>
                            }
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default TodoList