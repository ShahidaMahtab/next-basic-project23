//import Image from 'next/image';

import SingleEvent from './SingleEvent';

const EventList = ({ eventList, eventId }) => {
	return (
		<div className='container mx-auto'>
			<h1 className='text-5xl py-14 font-bold capitalize'>
				Events in {eventId}
			</h1>
			{eventList.map((event) => {
				return <SingleEvent event={event} />;
			})}
		</div>
	);
};

export default EventList;
