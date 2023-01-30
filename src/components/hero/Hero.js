import './Hero.css';
import {Link} from 'react-router-dom';
import Vid from '../../images/video.mp4';
const Hero = () => {
	return (
		<div className='hero relative'>
			<video
				src={Vid}
				className='absolute w-screen h-[900px] md:object-cover object-top'
				autoPlay
				loop
				muted
			/>
			<div className='absolute bg-blue shapeDiv' id='slide'>
				<div className='shapeDivTwo' id='slideTwo'>
					<h1 className='hero-text'>
						<span>Technical Solutions </span>for your business.
					</h1>
					<p className='heroPara'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
						qui.
					</p>
					<button className='hero-button'><Link to='/about-us'>Learn More</Link></button>
				</div>
			</div>
			<div className='absolute w-full h-full top-0 left-0 bg-gray-900/60'></div>
		</div>
	);
};

export default Hero;
