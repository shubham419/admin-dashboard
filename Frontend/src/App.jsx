import "./App.css";
import Dashboard from "./components/Dashboard";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Placeholder from "./components/Placeholder";
import ManageTeams from "./components/manage_team/ManageTeam";
import ManageUsers from "./components/manage_team/ManageUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/manage-teams" Component={ManageTeams}></Route>
          <Route path="/manage-users" Component={ManageUsers}></Route>
          <Route path="/placeholder" Component={Placeholder}></Route>
          <Route path="/" Component={Dashboard}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
