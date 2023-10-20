import './styles/layout.css';
import Sidebar from "./components/Sidebar/Sidebar";

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <div className='side-bar'>
        <Sidebar />
      </div>
      <div className='main-content'>{children}</div>
    </div>
  );
};

export default Layout;
