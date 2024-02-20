import getClient from "@/contentfulClient";
import NewsList from "./components/NewsList";

const News = async () => {
	
	const client: any = getClient();
	const res = await client.getEntries({ content_type: 'news' });

	const news = res.items;
	//console.log(news);
	

	return (
		<div className="w-[100%] flex justify-center">
			
			<NewsList news= {news}/>

		</div>
	)
};
export default News;
