import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { User } from '../../../domain/user';
import ProfileCard from '../../components/ProfileCard';
import { UserUseCase } from '../../../interface/useCase/userUseCase';
import { useProfile } from './hook';

type Props = {
  useCase: UserUseCase;
};

const Profile = ({ useCase }: Props) => {
  const [user, fetchUser] = useProfile({useCase});

  useEffect(() => {
    fetchUser();
  }, []);

  return <ProfileCard user={user} />;
};

export default Profile;