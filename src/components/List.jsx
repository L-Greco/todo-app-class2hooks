import { toggleCompleted, reset } from "../store/actions";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const List = function () {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  return (
    <>
      <ul>
        {list.map((todo) => (
          <li
            key={todo.id}
            onClick={() => dispatch(toggleCompleted(todo))}
            className={todo.completed ? "strikethrough" : ""}
          >
            {todo.description}
          </li>
        ))}
      </ul>
      <Button onClick={() => dispatch(reset())}>reset</Button>
    </>
  );
};

export default List;
