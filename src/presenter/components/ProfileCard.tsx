import React from "react";
import { User } from "../../domain/user";
import { useTranslation } from "react-i18next";

type Props = {
  user?: User;
};

const ProfileCard = ({ user }: Props) => {
  const { t } = useTranslation();
  
  return (
    <>
      <h1>{t("user_name")}：{user?.name ?? t("error.not_found_user")}</h1>
      <h2>ID：{user?.id ?? ""}</h2>
    </>
  );
};

export default ProfileCard;
