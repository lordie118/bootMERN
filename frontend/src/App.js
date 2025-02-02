import Login from './component/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from './component/SignUp';
import 'flowbite';

import TaskExemple from './component/TaskExemple';
import PrivateRoute from './middlewear/PrivateRoute';
import PresntationPage from './component/Test/PresntationPage';

import Legals from './component/Test/Legals';
import Navbar from './component/Test/Navbar';
import { ContactUs } from './component/Test/ContactUs';
import { Ressources } from './component/Test/Ressources';
import { ServicesPage } from './component/Test/ServicePage';






function App() {
  return (
<div className=''>
  <BrowserRouter>
  <Navbar />
  

   <Routes>


    <Route path='/login' element={<Login />} />
    <Route path='/sign' element={<SignUp />} />
    <Route path='/pp' element={<PresntationPage />} />
    <Route path='/contact' element={<ContactUs />} />
    <Route path='/ressources' element={<Ressources />} />
    <Route path='/legals' element={<Legals />} />
    <Route path='/services' element={<ServicesPage />} />

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
