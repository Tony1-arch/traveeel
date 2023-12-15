import 'bootstrap/dist/css/bootstrap.min.css'
import { Route,  RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './layout/Layout';
import About from './pages/About';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
     <Route index element={<Home/>} />
     <Route path='about' element={<About/>} />
    </Route>
  )
)
function App() {
  return (
    <div className='app'>
     <RouterProvider router={router}/>
    </div>  
  );
}

export default App;
