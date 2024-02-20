import { createClient } from 'contentful'
import { cache } from 'react'

const getClient = () =>{
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID!,
		environment: process.env.CONTENTFUL_ENVIRONMENT_KEY!,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
	})

	
	//console.log(res.items);

	return client;
}

export default getClient;