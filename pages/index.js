import Home from '@/components/Home';
import { events_categories } from '@/data/data.json';
const HomePage = ({ events }) => {
	return (
		<div className='container mx-auto py-4'>
			<Home events={events} />
		</div>
	);
};

export default HomePage;

export const getStaticProps = async () => {
	return {
		props: {
			events: events_categories,
		},
	};
};
