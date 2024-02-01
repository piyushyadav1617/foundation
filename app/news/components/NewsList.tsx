
export default function NewsList({news}:any) {
    return (
      <>

        <div className="w-[80%] bg-slate-100 my-[20px] flex flex-col items-center">

          {news.map( (data:any) =>(
              <div key={data.sys.id} className="p-[1rem]">
                  <a href={'/news/' + data.fields.slug} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                  <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src= {data.fields.imageTop.fields.file.url} alt=""/>
                  <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.fields.title}</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  </div>
              </a>
              </div>
          ))}
        </div>
      </>
    )
  }
  