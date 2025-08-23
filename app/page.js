import AboutSection from "@/component/Aboutaction";
import Footer from "@/component/Footer";
import Gallery from "@/component/Gallery";
import Middle from "@/component/Middle";
import Nadia from "@/component/Nadia";
import Nav from "@/component/Nav";
import VideoTestimonial from "@/component/Videotestomonial";
import Image from "next/image";


export default function Home() {
  return (
<div >
{/* Navbar */}
{/* <Nav/> */}
<Nadia/>
<Middle/>
<Gallery/>
<AboutSection/>
<VideoTestimonial/>
<Footer/>
</div>
);
}
