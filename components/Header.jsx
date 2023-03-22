import Image from "next/image";
import React from "react";
import { SearchIcon, PlusCircleIcon} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid"

export default function Header() {
  return (
  <div className="shadow-sm border-b sticky top-0 z-30 bg-gray-100">
    <div className="flex max-w-6xl items-center justify-between mx-4 xl:mx-auto">
        {/* left */}
        <div className="cursor-pointer w-24 h-24 relative hidden lg:inline-grid">
          <Image
            src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="relative cursor-pointer lg:hidden h-24 w-10">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
            layout="fill"
            className="object-contain"
          />
        </div>
        {/* middle */}
        <div className="relative mt-1">
            <div className="absolute top-2 left-2">
            <SearchIcon className="h-5 text-gray-500" />
            </div>
            <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"/>
        </div>

         {/* right */}
        <div className="flex space-x-4 items-center">
            <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 trnsition-transform duration-200 ease-out"/>
            <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 trnsition-transform duration-200 ease-out"/>
            <img src="https://pps.whatsapp.net/v/t61.24694-24/266085040_763312398451113_5669021778600555408_n.jpg?ccb=11-4&oh=01_AdQGgiBhMM9hcVyr4FAhFENGFQSe79pSq2a1sxZU33Loow&oe=6426B67A" alt="user-image" className="h-10 rounded-full cursor-pointer"/>
        </div>
      </div>
  </div>
      
      

      

     
    
  );
}
