import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserDriverImpl from "../driver/userDriver";
import UserRepositoryImpl from "../repository/userRepository";
import UserUseCaseImpl from "../useCase/userUseCase";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const userRepository = new UserRepositoryImpl(new UserDriverImpl());
const userUseCase = new UserUseCaseImpl(userRepository);

const App = () => {
  const theme = createTheme(
    {
      palette: {
        mode: "dark",
        primary: {
          main: '#0084FF',
         }
      },
    }
  );
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/profile/`} element={<Profile useCase={userUseCase}/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
