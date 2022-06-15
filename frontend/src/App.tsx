import { LoginArea } from './pages/Login/Login'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home'
import { NotFound } from './pages/notFound'
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { useContext } from 'react';
import { AuthContext } from './contexts/Auth/AuthContext';

function App() {

  const auth = useContext(AuthContext);
  
  
  let hasUser:boolean = false;

  if(auth.user){
    hasUser = true
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginArea />} />
        <Route path='/inicio' element={<RequireAuth><Home haveAnUser={hasUser}></Home></RequireAuth>} />


        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;