import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div>
      <div className="flex max-w-6xl items-center justify-between">
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
        <h1>right</h1>
      </div>
      {/* left */}

      {/* middle */}

      {/* right */}
    </div>
  );
}
