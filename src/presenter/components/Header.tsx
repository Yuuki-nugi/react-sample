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
import { useAuth } from "../hooks/useAuth";
import { useTranslation } from "react-i18next";
 
const setNavLinks: Array<{ text: string, url: string }> = [
  { text: "Home", url: "/" },
  { text: "Profile", url: "/profile" },
];
 
const Header: React.FC = () => {
  const auth = useAuth();
  const { t } = useTranslation();
    
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
                        <List component="nav" sx={{ display: 'flex', justifyContent: 'flex-start'}}>
                            { setNavLinks.map( (navLink) => (
                            <ListItem disablePadding sx={{ width: 160}}>
                                <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={navLink.url}>
                                    <ListItemText primary={navLink.text} />
                                </ListItemButton>
                            </ListItem>
                            ))}
                            {
                                auth.isAuthenticated ? (
                                    <ListItem disablePadding sx={{ width: 160}}>
                                        <ListItemButton sx={{ textAlign: 'center' }} onClick={auth.signOut}>
                                            <ListItemText primary={t("sign_out")} />
                                        </ListItemButton>
                                    </ListItem>
                                ) : (
                                    <ListItem disablePadding sx={{ width: 160}}>
                                        <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={"/sign_in"}>
                                            <ListItemText primary={t("sign_in")} />
                                        </ListItemButton>
                                    </ListItem>
                                )
                            }
                            
                        </List>
                    </Box>
                </Box>
            </Container>
        </AppBar>
    </>
  );
};
 
export default Header;