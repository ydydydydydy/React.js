import React, { useContext, useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { TodoContext } from "../context/TodoContext";

// 할 일 삭제 기능
const TodoItem = ({ todo }) => {
  const { todos, setTodos } = useContext(TodoContext);

  const [edited, setEdited] = useState(false); // 수정 가능한 상태인지에 대한 정보
  const [newContent, setNewContent] = useState(todo.content);

  // 할 일 완료 체크기능
  const completeChange = () => {
    // 사용자가 체크한 할 일 정보를 새로운 배열로 생성
    let updateList = todos.map((item) => ({
      ...item,
      complete: todo.id === item.id ? !item.complete : item.complete,
    }));

    setTodos(updateList);
  };

  // 수정 상태 변경 기능
  const editedChange = () => {
    setEdited(true);
  };

  // 할 일 수정 기능
  const contentUpdate = () => {
    let updateList = todos.map((item) => ({
      ...item,
      content: todo.id === item.id ? newContent : item.content,
    }));

    setTodos(updateList);
    setEdited(false);
  };

  return (
    <li className="todo-item">
      {todo.complete ? (
        <FaCheckCircle
          style={{ color: "green" }}
          className="todo-item-checkbox"
          onClick={completeChange}
        />
      ) : (
        <FaRegCircle className="todo-item-checkbox" onClick={completeChange} />
      )}

      {/* edited값에 따라 서로 다른 HTML 요소 출력하기 */}
      {edited ? (
        <input
          type="text"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
      ) : (
        <span className="todo-item-content">{todo.content}</span>
      )}

      <button className="todo-item-submit-btn" onClick={contentUpdate}>
        ✔
      </button>
      <button className="todo-item-edit-btn" onClick={editedChange}>
        ✏
      </button>
      <button className="todo-item-delete-btn">🗑</button>
    </li>
  );
};

export default TodoItem;
