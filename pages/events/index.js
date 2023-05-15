import EventCard from '@/components/Events/EventCard';
import { events_categories } from '@/data/data.json';

import React from 'react';

const Events = ({ events }) => {
	return (
		<div className='container mx-auto p-4 space-y-4'>
			{/* search events */}
			<div className='text-center '>
				<input
					type='search'
					name=''
					id=''
					className='bg-lightGray text-2xl p-2'
				/>
				<button className='bg-secondary font-semibold p-3 rounded-sm'>
					Search
				</button>
			</div>
			<div>
				<h1 className='text-5xl py-14 font-bold'>Our Events</h1>
			</div>
			<div>
				<EventCard events={events} />
			</div>
		</div>
	);
};

export default Events;
export const getStaticProps = async () => {
	return {
		props: {
			events: events_categories,
		},
	};
};
