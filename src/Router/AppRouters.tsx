import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout';
import { About } from '../feature/about/About';
import { Dashboard } from '../feature/dashboard/Dashboard';
import { Default } from '../feature/default/Default';
import { Home } from '../feature/home/Home';
import { ReactTodos } from '../feature/reactTodos/ReactTodos';

function AppRouters() {
  return (     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/layout' element={<Layout/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/reactTodos' element={<ReactTodos/>}/>
        <Route path='*' element={<Default/>}/>


      </Routes>
  )
}

export {AppRouters}
