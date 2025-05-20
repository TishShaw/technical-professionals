import { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import {BsTelephoneFill} from 'react-icons/bs';
import {VscChromeClose} from 'react-icons/vsc';
import { Link, useParams } from 'react-router-dom';
import Tabs from '../Tabs';
import LOGO from '../../images/fulllogo_transparent.png';
import './Navbar.css';

const Navbar = () => {
	const [showMobile, setShowMobile] = useState(false);

	return (
		<div>
			<div className='bg-red-500 w-full h-[35px] flex text-white justify-end items-center py-6'>
				<BsTelephoneFill className='mr-2' />
				<span className='mr-6'>(443) 554-6487</span>
			</div>
			<nav className='h-[90px] flex bg-black text-white justify-between items-center w-full pr-6'>
				<h1 className='navbar-title'>
					<Link to='/'>
						<img src={LOGO} alt='Logo' className='logoImg' />
					</Link>
				</h1>
				<div className='hidden md:block'>
					<Tabs />
				</div>
					<span className='md:hidden text-2xl '>
						{!showMobile && <GoThreeBars onClick={() => setShowMobile(!showMobile)} />}
						{showMobile && <VscChromeClose onClick={() => setShowMobile(!showMobile)}/>}
					</span>
					{showMobile && <div className='md:hidden text-2xl absolute right-0 top-[135px] bg-red-500 h-screen w-[45%] p-6 z-10'>
						<Tabs/>
					</div>}
				
			</nav>
		</div>
	);
};

export default Navbar;
