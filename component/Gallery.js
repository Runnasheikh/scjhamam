import Image from "next/image";

const Gallery = () => {
  return (
    <section className="py-10 bg-tranparent">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl text-amber-200 font-bold mb-4">Gallery Highlights</h2>
        <p className="text-white mb-8">
          Explore Scjha Iqbal&apos;s stunning portfolio and captivating musical
          moments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-7 ">
          {/* First Image */}
          <div className=" overflow-hidden shadow-lg ">
            <Image
              src="/jha5.png"
              alt="Scjha Iqbal Concert"
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second Image */}
          <div className=" overflow-hidden shadow-lg p-2">
            <Image
              src="/jha2.jpg"
              alt="Gallery Image 2"
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Third Image */}
          <div className=" overflow-hidden shadow-lg p-2">
            <Image
              src="/jha3.jpg"
              alt="Gallery Image 3"
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Fourth Image */}
          <div className=" overflow-hidden shadow-lg p-2">
            <Image
              src="/jha2.jpg"
              alt="Gallery Image 4"
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
