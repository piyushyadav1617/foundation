const News = ({ params }: { params: { slug: string } }) => {
	return <div>{params.slug}</div>;
};
export default News;
