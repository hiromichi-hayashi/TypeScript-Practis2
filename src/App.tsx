import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";

//型定義

/**
 * 型定義することのメリット
 *
 * 配列などの複数データがあるものを明示的に指定することで意図しないエラーを防ぐ
 * 型定義に乗っとて動作候補が出てくることで入力ミスが減る
 * 受け取るデータの型名に対してエラーが出る
 * propsに値を渡す際必要な値がないとエラーを出す
 *
 */

const user = {
  name: "a"
  // hobbies: ["映画", "ゲーム"]
};

export default function App() {
  //stateの型指定　useState<any>
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    //APIデータに型定義をする　　.get<Array<TodoType>>
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color={"red"} fontSize={"18px"} />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        ></Todo>
      ))}
    </div>
  );
}
