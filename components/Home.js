import Image from 'next/image';
import Link from 'next/link';

const Home = ({ events }) => {
	return (
		<section className='container mx-auto'>
			<h1 className='text-5xl py-14 font-bold'>
				Welcome to Our Grand <br /> Events
			</h1>
			<div className='grid grid-cols-3 justify-center mx-auto gap-4'>
				{events.map((event) => {
					return (
						<div
							key={event.id}
							className='mx-auto rounded space-y-4 border-2 border-lightGray bg-lightGray p-4 shadow-md  '
						>
							<div className=''>
								<Image
									alt={event.title}
									src={event.image}
									width={600}
									height={400}
									className='rounded'
								/>
							</div>
							<div>
								<h2 className='text-2xl font-semibold'>
									{event.title}
								</h2>
								<p>{event.description.slice(0, 60)}</p>
							</div>
							<div>
								<Link href={`/events/${event.id}`}>
									<button className='bg-secondary py-2 px-4 rounded-lg '>
										Details &rarr;
									</button>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Home;
