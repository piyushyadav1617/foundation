'use client';

import { InfiniteMovingCards } from '../../components/ui/infinite-moving-cards';
import image1 from '@/public/image1.jpg';
import image2 from '@/public/image2.jpg';
import image3 from '@/public/image3.jpg';
import image4 from '@/public/image4.jpg';

export function Corousel() {
	return (
		<div className="h-[20rem]  flex items-center justify-center relative">
			<InfiniteMovingCards
				items={testimonials}
				direction="right"
				speed="slow"
			/>
		</div>
	);
}

const testimonials = [image1, image2, image3, image4];
