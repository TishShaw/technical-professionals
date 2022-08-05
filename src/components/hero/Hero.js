import "./Hero.css";

const Hero = () => {
    return (
			<div className='hero'>
				<img
					src='https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80'
					alt=''
					className='heroImg'
				/>
				<div className='shapeDiv' id='slide'>
					<div className='shapeDivTwo' id='slideTwo'>
						<h1 className='hero-text'>
							<span>Technical Solutions </span>for your business.
						</h1>
						<p className="heroPara">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
							qui.
						</p>
						<button className='hero-button'>Learn More</button>
					</div>
				</div>
			</div>
		);
};

export default Hero;