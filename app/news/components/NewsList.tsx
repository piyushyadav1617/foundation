'use client';
import { Button } from '@/components/ui/button';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function NewsList({ news }: any) {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true); // Set isClient to true when component is mounted on the client side
	}, []);

	console.log(news);
	return (
		<>
      <div className='w-[100%] flex flex-col justify-center items-center'>
        <div className='my-[3rem]'>
          <h1 className='font-sans text-3xl font-bold'>News Section</h1>
        </div>

        <div className=" w-[80%] place-items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 my-[2rem]">
          {news.map((data: any) => (
            <motion.div
            className="relative flex w-80 flex-col rounded-xl bg-slate-300 bg-clip-border text-gray-700 shadow-md my-[2rem]"
            key={data.sys.id}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            <Image
              src={`http:${data.fields.imageTop.fields.file.url}`}
              width={data.fields.imageTop.fields.file.details.image.width}
              height={data.fields.imageTop.fields.file.details.image.height}
              alt="Sunset in the mountains"
              className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
            />
          
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {data.fields.title}
              </h5>
          
              {isClient ? (
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  {documentToReactComponents(data.fields.description)}
                </p>
              ) : (
                // Placeholder content for server-side rendering
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">Loading description...</p>
              )}
              
            </div>
          
            <div className="p-6 pt-0">
              <button
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                <Link href={'/news/' + data.fields.slug}>Read More...</Link>
              </button>
            </div>
          </motion.div>
          
          ))}
        </div>
      </div>
		</>
	);
}

