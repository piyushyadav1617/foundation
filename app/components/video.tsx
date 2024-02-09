const Video = () =>{
    return (
       <section className="flex bg-[url('/video.svg')] bg-cover shadow-xl  flex-col-reverse lg:flex-row bg-blue-100 min-h-fit h-[700px] md:h-[510px] lg:h-[400px] p-4  sm:mx-10 2xl:mx-auto 2xl:w-[1400px] gap-4 rounded-lg items-center md:items-start justify-between">  
           <div className="flex-1 flex flex-col gap-8 justify-center h-full">
            <h2 className="text-3xl font-semibold">Watch This Video</h2>
            <p className="backdrop-blur-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deserunt quidem vero culpa sed voluptatibus repellendus perferendis quis maiores est nulla modi rem earum quo iusto quaerat cum eius ipsa deleniti, maxime esse? Eum quia ducimus illum nostrum laboriosam quibusdam voluptate, facilis, vero culpa nemo nihil veniam error non labore voluptatem </p>
           </div>
           <div className=" lg:h-full flex items-center justify-center w-full sm:flex-1">
           <iframe className='w-full h-[300px] lg:h-full rounded-lg' src="https://www.youtube.com/embed/I5UBikauIQM?si=q4hecqF87I5c5nzi" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
           </div>
          
       </section>
    )
}
export default Video

