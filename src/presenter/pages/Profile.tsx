import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { User } from '../../domain/user';
import ProfileCard from '../components/ProfileCard';
import { UserUseCase } from '../../interface/useCase/userUseCase';

type Props = {
  useCase: UserUseCase;
};

const Profile = ({ useCase }: Props) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    setUser(await useCase.fetchUser());
  };

  return <ProfileCard user={user} />;
};

export default Profile;