import Image from 'next/image';

const SingleEvent = ({ event }) => {
	return (
		<div
			key={event.id}
			className='mx-auto rounded-lg space-y-4 border-2 border-lightGray p-2 mb-3 bg-lightGray shadow-sm '
		>
			<div className='flex space-x-4 '>
				<div className=''>
					<Image
						alt={event.title}
						src={event.image}
						height={400}
						width={400}
						className='rounded-lg h-[266px] '
					/>
				</div>
				<div className='space-y-2'>
					<h2 className='text-2xl font-semibold'>{event.title}</h2>
					<h4 className='text-base capitalize'>{event.city}</h4>
					<p>{event.description}</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Earum explicabo id nemo ipsa accusamus blanditiis
						illum porro ducimus facilis unde.
					</p>
					<p>00:00 || SUN-THU </p>
					<button className='bg-secondary py-2 px-4 rounded-sm uppercase'>
						Register
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleEvent;
