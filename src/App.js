import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllUsers from "./Component/AllUsers";
import NavBar from "./Component/NavBar";
import CodeForInterview from "./Component/CodeForInterview";
import AddUser from "./Component/AddUser";
import NotFound from './Component/NotFound'
import Edit from './Component/Edit'
function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<CodeForInterview/>} />
      <Route exact path="/all" element={<AllUsers/>} />
        <Route exact path="/add" element={<AddUser />} />
        <Route exact path="/edit/:id" element={<Edit />} />
      <Route path='*' element={<NotFound/>} />
        
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
