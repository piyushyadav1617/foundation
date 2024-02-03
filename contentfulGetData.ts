import { createClient } from 'contentful'
import { cache } from 'react'

const getData = cache( async() =>{
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID!,
		environment: process.env.CONTENTFUL_ENVIRONMENT_KEY!,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
	})

	const res = await client.getEntries({ content_type: 'news' });
	//console.log(res.items);

	return res.items;
})

export default getData;