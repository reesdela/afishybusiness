import Header from './components/shared/header/Header';
import Navigation from './components/shared/navigation/Navigation';
import Slider from './components/slider-home/Slider';
import Footer from './components/shared/footer/Footer';
import useMediaQuery from './components/shared/hooks/useMediaQuery';

const AFishyBusiness = () => {
    const isMobile = useMediaQuery('(max-width: 480px)')

    return (
            <>{!isMobile && <Header />}<Navigation /><Slider /><Footer /></>
    )
}

export default AFishyBusiness;