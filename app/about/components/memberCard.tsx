import {
	Card,
	CardContent
} from '@/components/ui/card';
import Image from 'next/image';
type Person = {
	key: number;
	name: string;
	img: string;
};
const MemberCard = ({ person }: { person: Person }) => {
	return (
		<Card className='w-40 sm:w-60 shadow-md bg-slate-50 border-none '>
			<CardContent className='p-0 '>
				<Image
					src={person.img}
					width={300}
					height={500}
					alt="member"
                    className='w-full h-56 sm:h-80 rounded-t-lg'
				/>
			</CardContent>
			<h4 className='p-4 font-medium'>{person.name}</h4>
    
		</Card>
	);
};
export default MemberCard
