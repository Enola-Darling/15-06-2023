import { useState } from "react";
import Card from "../todoCard";
import {todoList} from "../../mocks/todos";
import "./index.css";

const TodoList =() => {
    const [todoItem, setTodoList] = useState(todoList);

    const onHandleTodosFilter = (nChars) => {
        setTodoList(todoItem.filter((todo) => todo.todo.length <= nChars));
    };

    return (
        <div className="App__todoList">
            <div className="todo__info">
                <h4>TODO</h4>
                <p> {todoItem.length} </p>
            </div>
            <div className="button">
            <button className="button" onClick={() => onHandleTodosFilter(16)}>Filtra per 16</button>
            <button className="button" onClick={() => onHandleTodosFilter(25)}>Filtra per 25</button>
            <button className="button" onClick={() => onHandleTodosFilter(32)}>Filtra per 32</button>
            </div>
        {todoItem.map((todo) => (
          <Card data={todo} key={todo.id} />
        ))}
      </div>
    )
}

export default TodoList;