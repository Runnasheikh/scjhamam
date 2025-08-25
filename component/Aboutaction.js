import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="w-11/12 mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      {/* Left Side Image */}
      <div className="flex justify-center">
        <Image
          src="/jha2.jpg" // your image in /public
          alt="Nadia Iqbal performing"
          width={500}
          height={700}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Right Side Content */}
      <div className="text-black"> 
        {/* Vocal Journey */}
        <h2 className="text-4xl font-bold mb-6">Vocal Journey</h2>
        <p className=" text-lg mb-12 leading-relaxed text-black">
          Explore the captivating portfolio of Scjha, a talented female
          singer with a unique style.
           Performed for Mithila Vikas Parishad, Kolkata on 7th July 2024 (West Bengal).
            Performed for Atal Mithia Samaj, Ludhiana on 13th April 2024 (Punjab).
        </p>

        {/* Experience */}
        <h2 className="text-4xl font-bold mb-6">Experience</h2>

        <ul className="space-y-6  text-lg leading-relaxed text-black">
          
          
          <li>
            Performed for Viddyapati Munch, Siliguri on 8th March 2024 (West Bengal).
          </li>
          <li>
            Performed for Mithila Sanskriti Vikas Samiti, Patna on 16th December 2023 (Bihar).
          </li>
          <li>
            Performed for Viddyapati Munch, Lilua on 8th April 2023 (West Bengal).
          </li>
          <li>
            Performed for Viddyapati Smriti Parv Samaroh, Kirari on 14th May 2022 (Delhi).
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
