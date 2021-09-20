import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../actions";
import "./todo.css";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.list);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <h2>Add Your List Here</h2>
          </figure>

          <div className="add-items">
            <input
              type="text"
              placeholder="Add items... ✍"
              value={inputData}
              onChange={(event) => {
                setInputData(event.target.value);
              }}
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                dispatch(addTodo(inputData));
                setInputData("");
              }}
            >
              Save
            </button>
          </div>
          <div className="show-items">
            {list.map((element, index) => {
              return (
                <div className="each-item" key={element.id}>
                  <span>
                    <h3>{element.data}</h3>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        dispatch(deleteTodo(element.id));
                      }}
                    >
                      Delete
                    </button>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
