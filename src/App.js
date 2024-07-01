import "./App.css";
 import AddUser from "./adduser/AddUser";
import User from "./getuser/User";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
 import Update from "./updateuser/Update";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
 import Pagenotfound from "./pages/Pagenotfound";

 

function App() {
  // const route = createBrowserRouter([
  //   {
  //     path: "/list",
  //     element: <User />,
  //   },
  //   {
  //     path: "/add",
  //     element: <AddUser />,
  //   },
  //   {
  //     path: "/update/:id",
  //     element: <Update />,
  //   },
  // ]);
  return (
    <div className="App">
      {/* <RouterProvider router={route}></RouterProvider> */}
      <div>
       <BrowserRouter> 
        <Routes>
            <Route exact path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
         <Route path="/add" element={<AddUser/>}/>
         <Route path="/list" element={<User/>} />
           <Route path="/update/:id" element={<Update/>} />
               <Route path="*" element={<Pagenotfound />} /> 
      
        </Routes>
       </BrowserRouter> 
  
    </div>
    </div>
  );
}

export default App

