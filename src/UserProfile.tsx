import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = ({ user }) => {
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/** ? オプショナルチェイニング　　要素がない場合undefindeを返す */}
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};
