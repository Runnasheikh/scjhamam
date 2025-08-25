import Image from "next/image";

const reviews = [
  {
    name: "kunal",
    text: "Scjha's voice is mesmerizing! Her portfolio showcases her talent beautifully against a stunning dark backdrop.",
   
  },
  {
    name: "Amit",
    text: "Absolutely phenomenal! The energy and emotion in the performance are unmatched.",
   
  },
  {
    name: "Priya",
    text: "A true artist! Every song is delivered with passion and finesse. Highly recommend watching her performances.",
    
  },
];

const VideoTestimonial = () => {
  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white flex flex-col items-center justify-center p-8 text-center rounded-lg"
          >
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
            <p className="mb-6 text-lg leading-relaxed">{review.text}</p>

            {/* Reviewer */}
            <div className="flex flex-col items-center">
              <Image
                src={review.image}
                alt={review.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <p className="mt-3 font-semibold">{review.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoTestimonial;
