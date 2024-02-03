import getData from "@/contentfulGetData";
import NewsList from "./components/NewsList";

const News = async () => {
	
	const news: any = await getData();
	//console.log(news);
	

	return (
		<div className="w-[100%] flex justify-center">
			
			<NewsList news= {news}/>

		</div>
	)
};
export default News;
