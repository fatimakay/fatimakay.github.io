import { Outlet } from 'react-router-dom';
import './Layout.scss'; 
import Sidebar from './Sidebar';
const Layout = () => {
    
    return ( 
        <div className="app container-fluid"> 
        <div className="row">
            <div className="col-1 px-0 vh-100">
            <Sidebar/>
            </div>
            <div className="col-11 ">
            <Outlet/>
            </div>
        </div>
        </div>
     );
}
 
export default Layout;