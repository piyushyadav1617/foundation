import DetailedNews from "../components/DetailedNews";
import getClient from "@/contentfulClient";


const News = async({ params }: { params: { slug: string } }) => {

	const client: any = getClient();
	const res= await client.getEntries({ content_type: 'news', 'fields.slug': params.slug });

	return (
		<div className="w-full flex justify-center">
			<DetailedNews details= {res.items[0]}/>
		</div>
	)
};
export default News;
