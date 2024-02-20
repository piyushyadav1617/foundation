'use client'
import Image from "next/image";
import { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';



const DetailedNews = ({details}:any) => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true); // Set isClient to true when component is mounted on the client side
    }, []);

    const {title, slug, imageTop, description} = details.fields;

  return (
    <div className="w-[80%]  my-4 flex justify-center flex-col max-h-full overflow-y-auto" >
      
      <h1 className="text-4xl font-bold p-4">{title}</h1>

      <Image 
      src={`https:${imageTop.fields.file.url}`}
      alt=" "
      width={800}
      height={100}
      className="p-4 w-max-53 h-[350px] md:h-[450px]"
      />
      
      <p className="p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Enim eum atque ex reprehenderit? Officiis, nobis eum. 
        Necessitatibus sunt recusandae quae! Repudiandae totam 
        sunt molestiae repellat amet! Natus et quod mollitia.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Enim eum atque ex reprehenderit? Officiis, nobis eum. 
        Necessitatibus sunt recusandae quae! Repudiandae totam 
        sunt molestiae repellat amet! Natus et quod mollitia.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Enim eum atque ex reprehenderit? Officiis, nobis eum. 
        Necessitatibus sunt recusandae quae! Repudiandae totam 
        sunt molestiae repellat amet! Natus et quod mollitia.
      </p>
      <p className="p-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Enim eum atque ex reprehenderit? Officiis, nobis eum. 
        Necessitatibus sunt recusandae quae! Repudiandae totam 
        sunt molestiae repellat amet! Natus et quod mollitia.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Enim eum atque ex reprehenderit? Officiis, nobis eum. 
        Necessitatibus sunt recusandae quae! Repudiandae totam 
        sunt molestiae repellat amet! Natus et quod mollitia.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Enim eum atque ex reprehenderit? Officiis, nobis eum. 
        Necessitatibus sunt recusandae quae! Repudiandae totam 
        sunt molestiae repellat amet! Natus et quod mollitia.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Enim eum atque ex reprehenderit? Officiis, nobis eum. 
        Necessitatibus sunt recusandae quae! Repudiandae totam 
        sunt molestiae repellat amet! Natus et quod mollitia.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Enim eum atque ex reprehenderit? Officiis, nobis eum. 
        Necessitatibus sunt recusandae quae! Repudiandae totam 
        sunt molestiae repellat amet! Natus et quod mollitia.
      </p>

      <p className="p-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Enim eum atque ex reprehenderit? Officiis, nobis eum. 
        Necessitatibus sunt recusandae quae! Repudiandae totam 
        sunt molestiae repellat amet! Natus et quod mollitia.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Enim eum atque ex reprehenderit? Officiis, nobis eum. 
        Necessitatibus sunt recusandae quae! Repudiandae totam 
        sunt molestiae repellat amet! Natus et quod mollitia.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Enim eum atque ex reprehenderit? Officiis, nobis eum. 
        Necessitatibus sunt recusandae quae! Repudiandae totam 
        sunt molestiae repellat amet! Natus et quod mollitia.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Enim eum atque ex reprehenderit? Officiis, nobis eum. 
        Necessitatibus sunt recusandae quae! Repudiandae totam 
        sunt molestiae repellat amet! Natus et quod mollitia.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Enim eum atque ex reprehenderit? Officiis, nobis eum. 
        Necessitatibus sunt recusandae quae! Repudiandae totam 
        sunt molestiae repellat amet! Natus et quod mollitia.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Enim eum atque ex reprehenderit? Officiis, nobis eum. 
        Necessitatibus sunt recusandae quae! Repudiandae totam 
        sunt molestiae repellat amet! Natus et quod mollitia.
      </p>
      
    </div>
  )
}

export default DetailedNews