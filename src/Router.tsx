import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test1 from './pages/practice1/practice1';
import Test2 from './pages/practice2/practice2';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Test1 />} />
        <Route path='/2' element={<Test2/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
