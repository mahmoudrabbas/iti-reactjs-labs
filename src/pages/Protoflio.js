// import logo from './logo.svg';
// import '../../App1.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SliderComponent from '../components/lap1/sliderComponent';
import AboutComponent from '../components/lap1/AboutComponent';
import SkillsComponent from '../components/lap1/skillsComponent';
import CardComponent from '../components/lap1/cardComponent';
import FooterComponent from '../components/lap1/footerComponent';
function Protoflio() {
    return (
        <div className="App">
            <SliderComponent />
            <AboutComponent />
            <SkillsComponent />
            <CardComponent />
            <FooterComponent />
        </div>
    );
}

export default Protoflio;
