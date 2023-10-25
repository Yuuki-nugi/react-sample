import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';
import { Link } from '@mui/material';

export function SignIn() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { t } = useTranslation();

  const executeSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await auth.signIn(username, password);
    if (result.success) {
      navigate({ pathname: '/' });
    } else {
      alert(result.message);
    }
  };

  return auth.isAuthenticated ? (
    <Navigate to="/" />
  ) : (
    <>
      <form noValidate onSubmit={executeSignIn}>
        <div>
          <label htmlFor="username">{t("email")}: </label>
          <input
            id="username"
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">{t("password")}: </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{t("sign_in")}</button>
      </form>
      <Link href="/sign_up">{t("sign_up")}</Link>
    </>
  );
}