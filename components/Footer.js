import React from "react";

const Footer = () => {
  return (
    <footer className ="text-gray-600 body-font">
      <div className ="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className ="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className ="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="40px" viewBox="0 0 48 48">
          <path fill="#185abd" d="M24.48,29.316l-9.505,9.505L1.588,25.434c-0.784-0.784-0.784-2.054,0-2.838l6.667-6.667	c0.784-0.784,2.054-0.784,2.838,0L24.48,29.316z"></path><linearGradient id="5qKAcydctVb3hkGT27jhwa_HpPqCqynotVp_gr1" x1="14.572" x2="43.188" y1="38.199" y2="9.583" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4191fd"></stop><stop offset="1" stop-color="#55acfd"></stop></linearGradient><path fill="url(#5qKAcydctVb3hkGT27jhwa_HpPqCqynotVp_gr1)" d="M17.797,41.642l-6.667-6.667c-0.784-0.784-0.784-2.054,0-2.838L36.907,6.358	c0.784-0.784,2.054-0.784,2.838,0l6.667,6.667c0.784,0.784,0.784,2.054,0,2.838L20.634,41.642	C19.851,42.425,18.58,42.425,17.797,41.642z"></path>
</svg>
            <span className ="ml-3 text-xl">TodoApp</span>
          </a>
          
        </div>
        <div className ="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className ="lg:w-1/4 md:w-1/2 w-full px-4">
          </div>
          <div className ="lg:w-1/4 md:w-1/2 w-full px-4">
           
          </div>
          <div className ="lg:w-1/4 md:w-1/2 w-full px-4">
            
          </div>
          <div className ="lg:w-1/4 md:w-1/2 w-full px-4">
          </div>
        </div>
      </div>
      <div className ="bg-gray-100">
        <div className ="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className ="text-gray-500 text-sm text-center sm:text-left">
            © My TodoApp —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className ="text-gray-600 ml-1"
              target="_blank"
            >
              @Anurag
            </a>
          </p>
          <span className ="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className ="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className ="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className ="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className ="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className ="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className ="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className ="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className ="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
