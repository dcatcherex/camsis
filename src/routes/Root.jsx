import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
        <Nav />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Root