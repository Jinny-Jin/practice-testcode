import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test1 from './pages/practice1/practice1';
import Test2 from './pages/practice2/practice2';
import Test3 from './pages/practice3/practice3';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Test1 />} />
        <Route path='/2' element={<Test2 totalItems={9} itemsPerPage={3}/>}/>
        <Route path='/3' element={<Test3/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
