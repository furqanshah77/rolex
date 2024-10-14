import { footerData } from "@/constant/footer-data";
import Link from "next/link";
import Para from "../common/para";

const Footer = () => {
  return (
   <div> <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:justify-items-center lg:justify-center justify-start items-center lg:items-start px-2 md:px-24 lg:px-8 gap-y-10 gap-x-16 md:gap-x-24">
   {footerData.map((data) => (
     <div key={data.title} className="flex flex-col gap-y-4 ">
       <h1 className="font-bold text-xl text-lightTitle dark:text-darkTitle">
         {data.title}
       </h1>
       <div
         className={` ${
           data.title == "Social"
             ? "flex gap-x-6 lg:justify-center lg:items-center"
             : "flex flex-col gap-y-2"
         }`}
       >
         {data.items.map((item, index) => {
           if (data.title === "Social") {
             return (
               <Link href={item.link} key={`${item.name}-${index}`}>
                 <p className="text-lightText dark:text-darkText text-xl">
                   {item.name}
                 </p>
               </Link>
             );
           } else {
             return (
               <Link
                 href={item.link}
                 className="space-y-10"
                 key={`${item.name}-${index}`}
               >
                 <p className="text-lightText dark:text-darkText text-lg">
                   {item.name}
                 </p>
               </Link>
             );
           }
         })}
       </div>
     </div>
   ))}
 </div>
   <div className=" border-b-2 border-lightBorder dark:border-darkBorder h-2 col-span-4 w-full" />
<Para text="&copy; Creative Hub. All Rights reserved" className="text-[#8C8C8C] dark:text-[#8C8C8C] text-center lg:text-base text-sm font-normal mt-10"/>

 </div>
  );
};

export default Footer;
