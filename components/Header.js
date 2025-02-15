import React from "react";
import Link from "next/link";



const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/   svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 48 48">
        <path fill="#185abd" d="M24.48,29.316l-9.505,9.505L1.588,25.434c-0.784-0.784-0.784-2.054,0-2.838l6.667-6.667	c0.784-0.784,2.054-0.784,2.838,0L24.48,29.316z"></path><linearGradient id="5qKAcydctVb3hkGT27jhwa_HpPqCqynotVp_gr1" x1="14.572" x2="43.188" y1="38.199" y2="9.583" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4191fd"></stop><stop offset="1" stop-color="#55acfd"></stop></linearGradient><path fill="url(#5qKAcydctVb3hkGT27jhwa_HpPqCqynotVp_gr1)" d="M17.797,41.642l-6.667-6.667c-0.784-0.784-0.784-2.054,0-2.838L36.907,6.358	c0.784-0.784,2.054-0.784,2.838,0l6.667,6.667c0.784,0.784,0.784,2.054,0,2.838L20.634,41.642	C19.851,42.425,18.58,42.425,17.797,41.642z"></path>
</svg>
          <span className="ml-3 text-xl">TodoApp</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
          <Link href="/" className="mr-5 hover:text-gray-900">About</Link>
          <Link href="/todo" className="mr-5 hover:text-gray-900">My Todo</Link>
          
        </nav>
        
      </div>
    </header>
  );
};

export default Header;
