import { useEffect } from 'react';
import ProfileCard from '../../components/ProfileCard';
import { UserUseCase } from '../../../interface/useCase/userUseCase';
import { useProfile } from './hook';
import PrivateRoute from '../../components/PrivateRpute';

type Props = {
  useCase: UserUseCase;
};

const Profile = ({ useCase }: Props) => {
  const [user, fetchUser] = useProfile({useCase});

  useEffect(() => {
    fetchUser();
  }, []);

  return (
  <>
    <PrivateRoute>
      <ProfileCard user={user} />
    </PrivateRoute>
  </>
  );
};

export default Profile;