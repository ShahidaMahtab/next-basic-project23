import { useEffect, useRef } from 'react';

const About = () => {
	const ref = useRef(null);
	useEffect(() => {
		import('@lottiefiles/lottie-player');
	});
	return (
		<div className='container mx-auto'>
			<h1 className='text-5xl py-14 font-bold'>About us</h1>
			<div className=''>
				<lottie-player
					id='firstLottie'
					ref={ref}
					autoplay
					loop
					mode='normal'
					src='https://assets7.lottiefiles.com/packages/lf20_9wQfUoV4Wq.json'
					style={{ width: '300px', height: '300px' }}
				></lottie-player>

				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aperiam, impedit corporis. Officia magnam vero molestiae
						iste. Quia mollitia ut alias voluptatum. Animi maxime
						labore a aliquam minus beatae, in dolorem aut cupiditate
						corrupti dolorum, repudiandae exercitationem. Id aliquid
						veniam Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Aperiam, impedit corporis.
						<br />
						Officia magnam vero molestiae iste. Quia mollitia ut
						alias voluptatum. Animi maxime labore a aliquam minus
						beatae, in dolorem aut cupiditate corrupti dolorum,
						repudiandae exercitationem. Id aliquid veniam iure.
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aperiam, impedit corporis.
						<br />
						Officia magnam vero molestiae iste. Quia mollitia ut
						alias voluptatum. Animi maxime labore a aliquam minus
						beatae, in dolorem aut cupiditate corrupti dolorum,
						repudiandae exercitationem. Id aliquid veniam iure.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
