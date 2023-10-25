import { Box, Button, Container, Grid, styled } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Grid 
        container
        direction="column"
        alignItems="center"
        style={{ minHeight: '100vh' }}
        padding={8}
      >
        <h1>{t("greeting")}</h1>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/profile"
        >
          {t("profile")}
        </Button>
      </Grid>
    </>
  );
};

export default Home;