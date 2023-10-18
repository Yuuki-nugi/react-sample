import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserDriverImpl from "../driver/userDriver";
import UserRepositoryImpl from "../repository/userRepository";
import UserUseCaseImpl from "../useCase/userUseCase";

const userRepository = new UserRepositoryImpl(new UserDriverImpl());
const userUseCase = new UserUseCaseImpl(userRepository);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/profile/`} element={<Profile useCase={userUseCase}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
