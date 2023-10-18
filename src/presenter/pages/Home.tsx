import { Box, Button, Container, Grid, styled } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";

const PageTitleBox = styled('div')(({ theme }) => ({
  width: 400,
  height: 80,
  background: theme.palette.background.default,
  backgroundColor: "blue",
  color: "white",
  textAlign: "center",
  lineHeight: "80px",
  fontSize: 30,

}))

const ToProfileButton = styled(Link)(({ theme }) => ({ 
  width: 160,
  height: 40,
  marginTop: 80,
  backgroundColor: "skyblue",
  borderRadius: 20,
  textAlign: "center",
  lineHeight: "40px",
}))

const Home = () => {
  return (
    <>
      <Grid 
        container
        direction="column"
        alignItems="center"
        style={{ minHeight: '100vh' }}
        padding={8}
      >
        <PageTitleBox>ホーム</PageTitleBox>
        <ToProfileButton to={`/profile/`}>
          <Box>プロフィールへ</Box>
        </ToProfileButton>
      </Grid>
    </>
  );
};

export default Home;