import Image from "next/image";

const VideoTestimonial = () => {
  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side - YouTube Video */}
        <div className="w-full h-full">
          <iframe
            className="w-full h-[400px] md:h-[460px]" // increased ~15%
            src="https://www.youtube.com/embed/O73TZ-wJbg0"
            title="Soni Chaudhary Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Side - Testimonial */}
        <div className="bg-gray-800 text-white flex flex-col items-center justify-center p-10 text-center h-[400px] md:h-[460px]">
          {/* Stars */}
          <div className="flex mb-4">
            {Array(5)
              .fill()
              .map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
          </div>

          {/* Testimonial Text */}
          <p className="mb-6 text-lg leading-relaxed max-w-lg">
            Scjha&apos;s voice is mesmerizing! Her portfolio showcases her talent beautifully against a stunning dark backdrop.
          </p>

          {/* Reviewer */}
          <div className="flex flex-col items-center">
            <Image
              src="/jha3.jpg" // replace with reviewer’s picture
              alt="Scjha"
              width={60}
              height={60}
              // className="rounded-full"
            />
            <p className="mt-3 font-semibold">Scjha</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonial;
