import React from 'react';
import {BsCheck2Circle} from 'react-icons/bs';

const Services = () => {
	return (
		<div name='platforms' className='w-full my-32'>
			<div className='max-w-[1240px] mx-auto px-2'>
				<h2 className='text-5xl font-bold text-center'>On-Site IT Services</h2>
				<p className='text-2xl py-8 text-gray-500 text-center'>
					What we offer in a nutshell
				</p>

				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
					<div className='flex'>
						<div>
							<BsCheck2Circle className='w-7 mr-4 text-green-600' />
						</div>
						<div>
							<h3 className='font-bold text-lg'>Structured Cabling</h3>
							<p className='text-lg pt-2 pb-4'>
								Our technicians are highly trained and experienced structured
								cabling experts that can install cabling for any technology such
								as Network, A/V, Security Camera, and Coaxial.
							</p>
						</div>
					</div>
					<div className='flex'>
						<div>
							<BsCheck2Circle className='w-7 mr-4 text-green-600' />
						</div>
						<div>
							<h3 className='font-bold text-lg'>Point of Sale</h3>
							<p className='text-lg pt-2 pb-4'>
								Our technicians are skilled at installing and servicing POS
								on-site terminals, cloud computing terminals, mobile terminals,
								and self-service terminals.
							</p>
						</div>
					</div>
					<div className='flex'>
						<div>
							<BsCheck2Circle className='w-7 mr-4 text-green-600' />
						</div>
						<div>
							<h3 className='font-bold text-lg'>Security Cameras</h3>
							<p className='text-lg pt-2 pb-4'>
								Our installation teams have successfully executed large custom
								camera installations ranging from storage facilities and
								restaurants to garbage dumpster monitoring.
							</p>
						</div>
					</div>
					<div className='flex'>
						<div>
							<BsCheck2Circle className='w-7 mr-4 text-green-600' />
						</div>
						<div>
							<h3 className='font-bold text-lg'>Kiosks</h3>
							<p className='text-lg pt-2 pb-4'>
								Our national network of installation technicians has experience
								installing information kiosks, self-service kiosks, internet
								kiosks, advertising kiosks, wayfinding kiosks, and ATM kiosks.
							</p>
						</div>
					</div>
					<div className='flex'>
						<div>
							<BsCheck2Circle className='w-7 mr-4 text-green-600' />
						</div>
						<div>
							<h3 className='font-bold text-lg'>Networks</h3>
							<p className='text-lg pt-2 pb-4'>
								We’re capable of installing many types of networks such as LAN,
								WLAN, SD-WAN, RFID, Mesh Protocols, Point to Point, Access
								Points, Cellular 4G/5G, Rack Refresh, and VoIP.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
