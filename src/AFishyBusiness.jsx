import Header from './components/shared/header/Header';
import Navigation from './components/shared/navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from './components/shared/footer/Footer';
import useMediaQuery from './components/shared/hooks/useMediaQuery';
import Cookies from 'js-cookie';

const AFishyBusiness = () => {
    const isMobile = useMediaQuery('(max-width: 480px)')
    console.log(Cookies.get('UserInfo'))

    return (
            <>{!isMobile && <Header />}<Navigation /><Outlet /><Footer /></>
    )
}

export default AFishyBusiness;