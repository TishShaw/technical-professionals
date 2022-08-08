import './Navbar.css';
import LOGO from '../../images/Logo.png';
const Navbar = () => {
	return (
		<nav className='navbar'>
			<h1 className='navbar-title'>
				<img src={LOGO} alt='Logo' className='logoImg' />
				<span>T</span>echnical <span>P</span>rofessionals
			</h1>
			<ul className='navbar-list'>
				<li className='navbar-listItems hover-underline-animation'>Home</li>
				<li className='navbar-listItems'>Services</li>
				<li className='navbar-listItems'>About</li>
				<li className='navbar-listItems'>Contact</li>
			</ul>
		</nav>
	);
};

export default Navbar;
