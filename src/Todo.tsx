import { VFC } from "react";
import { TodoType } from "./types/todo";

//propsの型定義

/**
 *
 * Pick<TodoType, "title" | "userId" | "completed"> 必要な型を参照できる
 *Omit<TodoType, "id" 不要な型を省略
 */
export const Todo: VFC<Omit<TodoType, "id">> = ({
  title,
  userId,
  completed
}) => {
  const completeMark = completed ? "[完]" : "[未]";

  return (
    <div>
      <p>{`${completeMark}${title}(ユーザー：${userId})`}</p>
    </div>
  );
};
