import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/logo_black.png';

const Header = () => {
	return (
		<div className='bg-gradient-to-r from-gray-400 to-secondary  '>
			<div className='container mx-auto py-4'>
				<div className='flex justify-between space-y-4'>
					{/* logo */}
					<div>
						<Image src={logo} alt='logo' width={50} height={50} />
					</div>
					<div>
						<nav>
							<ul className='grid grid-cols-3 font-semibold'>
								<li>
									<Link href='/'>Home</Link>
								</li>
								<li>
									<Link href='/events'>Events</Link>
								</li>
								<li>
									<Link href='/about'>About Us</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
