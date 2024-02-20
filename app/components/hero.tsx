import Image from 'next/image';
import image from '@/public/daiga-ellaby-JZ51o_-UOY8-unsplash.jpg';
import DonateBtn from './donateBtn';

const Hero = () => {
	return (
		<section>
			<div className="pt-14 sm:pt-20 flex flex-col gap-10 md:flex-row justify-between mx-5 sm:mx-10 2xl:mx-auto 2xl:w-[1400px]">
				<div className="flex flex-col gap-10 md:w-1/2">
					<p className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold">
						The Power of <br /> Collective Giving
					</p>

					<p>
						Together, we can weave a tapestry of change, kindness, and enduring
						progress. Let&apos;s make a difference, one heart, one life at a
						time.
					</p>
					<DonateBtn />
				</div>
				<div className="md:w-1/2 flex flex-col  gap-6 justify-center items-center md:items-end xl:items-center">
					<div>
						<Image
							src={image}
							width={300}
							height={500}
							alt="Image"
							className="w-80 md:w-60 lg:w-80 shadow-lg shadow-black "
						/>
					</div>

					<div>
						<hr className="h-2 bg-slate-400 w-40 sm:w-60 my-4 rounded-full" />
						<p className="">
							Our mission is fueled by a commitment to uplift and empower,
							driven by the belief that every individual deserves a chance to
							thrive. At AliFoundation, we focus on key areas such as education,
							health, and environmental sustainability, striving to make a
							tangible difference in the lives we touch.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Hero;
