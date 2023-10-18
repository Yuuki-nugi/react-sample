import React from "react";
import { User } from "../../domain/user";

type Props = {
  user?: User;
};

const ProfileCard = ({ user }: Props) => {
  return (
    <>
      <h1>ユーザー名：{user?.name ?? "ユーザーが存在しません"}</h1>
      <h2>ID：{user?.id ?? ""}</h2>
    </>
  );
};

export default ProfileCard;
