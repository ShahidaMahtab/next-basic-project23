import Image from 'next/image';

const EventCard = ({ events }) => {
	return (
		<div className=''>
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
							<h1 className='font-semibold capitalize text-2xl'>
								{event.id}
							</h1>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default EventCard;
