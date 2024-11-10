import Image from "next/image";
import Beauty from "../../public/images/beauty.png"
import Header from "./components/header/header";


export default function Home() {
  return (
<div className="bg-white pb-80 ">
  
 <Header/>
<div className="max-w-md text-black">
  <h1 className="  font-sans md:font-serif font-normal  text-3xl p-7 pb-2 ml-64 mt-28 w-full">IMPECCABLE CRAFTSMANSHIP AND FINESSE </h1>
 <p className="text-[#c0ad87] ml-72  mt-7 w-full">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
 <button className="m-5 px-6 py-2 bg-[#c0ad87] text-white rounded ml-72"> Explore Now</button>
 <Image className="absolute bottom-40 right-40  w-80 h-100 rounded-lg overflow-hidden shadow-lg" src={Beauty} alt="beauty"/>
</div> 
<div>
</div>
</div>
   
  )
}
