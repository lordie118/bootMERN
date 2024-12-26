import Login from './component/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from './component/SignUp';
import 'flowbite';

import TaskExemple from './component/TaskExemple';
import PrivateRoute from './middlewear/PrivateRoute';


function App() {
  return (
<div className=''>
  <BrowserRouter>

   <Routes>


    <Route path='/login' element={<Login />} />
    <Route path='/sign' element={<SignUp />} />

    <Route element={<PrivateRoute />}>
    <Route path='/home' element={<TaskExemple />} />
    {/* <Route path='/ex' element={<TaskDashboard />} /> */}
    {/* <Route path='/chat' element={<ChatbotWidget />} /> */}
    </Route>
   </Routes>
   </BrowserRouter>
 </div>
  
  );
}

export default App;
