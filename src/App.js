import {Routes, Route} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Footer from "./components/footer/Footer";
import HomeScreen from './screens/HomeScreen';
import ServicesScreen from './screens/ServicesScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
    return (
		<div className='w-full h-full overflow-hidden'>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomeScreen/>} />
				<Route path='/services' element={<ServicesScreen/>} />
				<Route path='/about-us' element={<AboutScreen/>} />
				<Route path='/contact-us' element={<ContactScreen />} />
				<Route path='/login' element={<LoginScreen/>} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
