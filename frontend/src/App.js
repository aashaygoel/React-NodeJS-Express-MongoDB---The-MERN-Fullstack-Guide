import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./users/pages/Users";
import NewPlaces from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} exact/>
          <Route path="/place/new" element={<NewPlaces />} exact/>
          <Route path="/:userId/places" element={<UserPlaces/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
