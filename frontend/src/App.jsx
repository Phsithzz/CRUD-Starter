import { BrowserRouter, Routes, Route } from "react-router-dom";
//component
import FormProduct from "./components/FormProduct";
import FormEditProduct from "./components/FormEditProduct";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col bg-gradient-to-r from-black to-[#4b4b4d] transition duration-400 ease-in hover:bg-gradient-to-r hover:from-[#4b4b4d] hover:to-black">
        <Routes>
          
          <Route path="/" element={<FormProduct />}></Route>
          <Route path="/edit/:id" element={<FormEditProduct />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
