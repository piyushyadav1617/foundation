const News = ({ params }: { params: { slug: string } }) => {
	return <article className="min-h-[80vh]">{params.slug}</article>;
};
export default News;
