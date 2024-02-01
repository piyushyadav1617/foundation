import MemberCard from './components/memberCard';
const people = [
	{ key: 1, name: 'Person one', img: '/p1.jpg' },
	{ key: 2, name: 'Person two', img: '/p2.jpg' },
	{ key: 3, name: 'Person three', img: '/p3.jpg' },
	{ key: 4, name: 'Person four', img: '/p4.jpg' },
	{ key: 4, name: 'Person five', img: '/p5.jpg' },
];
const About = () => {
	return (
		<section className="min-h-[80vh] pt-10 flex flex-col gap-16">
			<div className="rounded-lg  h-[250px] flex bg-blue-200  mx-0 md:mx-10 2xl:mx-auto 2xl:w-[1400px] justify-center items-center">
				<h1 className="text-3xl lg:text-4xl font-semibold text-slate-700">
					About us
				</h1>
			</div>
			<article className="mx-5 sm:mx-10 2xl:mx-auto 2xl:w-[1400px] ">
				<h1 className="text-2xl my-4">WHO WE ARE</h1>
				<p>
					Welcome to Ali Foundation, a beacon of hope and compassion. Our
					mission is to extend a helping hand to those in need, embodying the
					spirit of generosity to create a better world for all. Ali Foundation
					envisions a world where every individual has the opportunity to
					thrive, regardless of their circumstances. We strive to build a
					society where kindness and support are fundamental to human existence.
					Rooted in empathy, Ali Foundation is committed to addressing pressing
					issues such as poverty, education inequality, and healthcare
					disparities. Our driving force is the belief that collective action
					can bring about meaningful change.Since our establishment, Ali
					Foundation has left an indelible mark on numerous lives. Through
					education initiatives, healthcare programs, and disaster relief
					efforts, we&apos;ve worked tirelessly to uplift communities and pave the
					way for a brighter tomorrow.Your involvement is crucial in shaping the
					impact of Ali Foundation. Whether through financial contributions,
					volunteering your time, or spreading awareness, your support amplifies
					our ability to make a positive difference. Join us in creating a world
					where compassion and care prevail. Thank you for being a vital part of
					the Ali Foundation journey. Together, we can build a future filled
					with hope and opportunities for all.
				</p>
				<p>
					At Ali Foundation, our actions are guided by core values such as
					integrity, transparency, and inclusivity. We believe in fostering a
					sense of community and empowering individuals to be agents of change
					in their own lives. One of Ali Foundation&apos;s primary focuses is on
					education. We are dedicated to providing quality education to every
					child, unlocking doors to a brighter future. Through scholarships,
					school development projects, and educational outreach programs, we aim
					to break the cycle of poverty through knowledge. Ali Foundation is
					committed to ensuring access to healthcare for all. From organizing
					medical camps in underserved areas to supporting healthcare
					infrastructure development, we strive to make quality healthcare a
					basic right, not a privilege. We recognize the importance of a
					sustainable future. Ali Foundation actively engages in environmental
					initiatives, promoting eco-friendly practices and participating in
					conservation efforts to preserve our planet for generations to come.
					Our foundation believes in the strength of communities. Through
					various community engagement programs, we encourage self-sufficiency
					and empower individuals to be active participants in their own
					development. Ali Foundation actively seeks partnerships and
					collaborations with like-minded organizations, businesses, and
					individuals who share our vision. By working together, we can amplify
					our impact and address challenges on a broader scale. Ali Foundation
					invites you to be part of our journey. Your support, no matter how big
					or small, contributes to building a more compassionate and equitable
					world. Together, we can make a lasting impact on lives and inspire
					positive change. Thank you for considering Ali Foundation as a channel
					for your philanthropic efforts. Together, let&apos;s create a legacy of
					compassion and transformation.
				</p>
			</article>
			<article className="mx-5 sm:mx-10 2xl:mx-auto 2xl:w-[1400px] place-content-center place-items-center mb-20">
				<h1 className="text-2xl my-4">OUR PEOPLE</h1>
				<div className='grid grid-cols-2  lg:grid-cols-4 gap-6 w-full '>
					{people.map((person) => {
						return (
							<MemberCard key={person.key} person={person}/>
						);
					})}
				</div>
			</article>
		</section>
	);
};
export default About;
