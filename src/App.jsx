import { Route, Routes } from "react-router-dom";
import Entrace from "./Entrace";
import Register from "./Register";


const App = () => {
  return (
    <>
    <main>
      <Routes>
        <Route path='/' element={<Entrace/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </main>
    </>
  )
};

export default App;
