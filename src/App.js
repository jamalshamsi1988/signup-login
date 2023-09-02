
import { Route, Routes } from 'react-router-dom';

import SignUp from './components/Signin';
import Login from './components/Login';

function App() {
  return (
    <div >
     <Routes>
     <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
     </Routes>

    </div>
  );
}

export default App;
