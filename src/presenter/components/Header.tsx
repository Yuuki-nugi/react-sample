import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Logo from "../../logo192.png"
import { styled } from "@mui/material/styles";
 
const setNavLinks: Array<{ text: string, url: string }> = [
    { text: "Home", url: "/" },
    { text: "Profile", url: "/profile" },
];
 
const Header: React.FC = () => {
  return(
    <>
        <AppBar component="header" position="static" sx={{backgroundColor: "transparent"}}>
            <Container maxWidth="md">
                <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                    <Box>
                        <Typography component="h1">
                            <Link to="/">
                                <img src={Logo} height="60" width="auto" />
                            </Link>
                        </Typography>
                    </Box>
                    <Box>
                        <List component="nav" sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            { setNavLinks.map( (navLink) => (
                            <ListItem disablePadding>
                                <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={navLink.url}>
                                    <ListItemText primary={navLink.text} />
                                </ListItemButton>
                            </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Container>
        </AppBar>
    </>
  );
};
 
export default Header;