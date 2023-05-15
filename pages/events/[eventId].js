import EventList from '@/components/Events/EventList';
import { allEvents } from '@/data/data.json';
const Event = ({ eventList, eventId }) => {
	return (
		<div>
			<EventList eventList={eventList} eventId={eventId} />
		</div>
	);
};

export default Event;

export const getStaticProps = async (context) => {
	const { params } = context;

	//eventId: 'london'
	const events = allEvents.filter((event) => event.city === params.eventId);

	return {
		props: {
			eventList: events,
			eventId: params.eventId,
		},
	};
};
export const getStaticPaths = async (context) => {
	//eventId: 'london'

	const paths = allEvents.map((event) => ({
		params: { eventId: event.city },
	}));
	return {
		paths: paths,
		fallback: 'blocking',
	};
};
