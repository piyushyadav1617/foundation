import Hero from './components/hero';
import { Corousel } from './components/corousel';
import Video from './components/video';

export default function Home() {
	return (
		<main className='space-y-10'>
			<Hero />
			<Video/>
			<Corousel />
		</main>
	);
}
