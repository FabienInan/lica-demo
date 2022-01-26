import 'moment/locale/fr';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Navbar from './components/NavBar';
import { SidebarData } from './components/SidebarData';

const App = () => {
  return (
    <>
      <Router>
        <Navbar>
          <Routes>
            {
              SidebarData.map((item) => <Route path={item.path} element={item.component} />)
            }  
          </Routes>
        </Navbar>
      </Router> 
    </>
  )
}

export default App;
