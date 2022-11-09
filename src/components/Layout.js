import { Outlet } from 'react-router-dom';
import './Layout.scss'; 
import Sidebar from './Sidebar';
const Layout = () => {
    
    return ( 
        <div className="app"> 
        <Sidebar/>
        <div className="page">
            <Outlet/>
          
        </div>
        </div>
     );
}
 
export default Layout;