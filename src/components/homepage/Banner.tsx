import Image from "next/image";


const Banner = () => {
    
    return (
      <div className="hero bg-base-200 container mx-auto rounded-2xl my-6 p-6 sm:p-10 lg:p-16">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-12 text-center lg:text-left p-0 max-w-full">
          {/* Image Container */}
          <div className="relative w-full max-w-md lg:max-w-lg h-64 sm:h-80 md:h-96 shrink-0">
            <Image
              src="/assets/pngwing 1.png"
              alt="Books collection illustration"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Text & Action Area */}
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
              Books to freshen up your bookshelf
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-500">
              Discover our curated collection of must-read books across all
              genres.
            </p>
            <div className="mt-6 sm:mt-8">
              <button className="btn btn-success bg-[#23BE0A] px-8">View The List</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Banner;