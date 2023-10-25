import { useState } from "react";
import { User } from '../../../domain/user';
import { UserUseCase } from '../../../interface/useCase/userUseCase';

type Props = {
  useCase: UserUseCase;
};

export const useProfile = ({ useCase }: Props)
: [User | undefined, () => void] => {
  const [user, setUser] = useState<User>();

  const fetchUser = async () => {
    setUser(await useCase.fetchUser());
  };

  return [user, fetchUser];
};