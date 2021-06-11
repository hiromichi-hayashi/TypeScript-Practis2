import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

//関数の型定義方法　Text: VFC<Props>

export const Text: VFC<Props> = ({ color, fontSize }) => {
  return <p style={{ color, fontSize }}>テキストです</p>;
};
