import React from 'react';
import Image2 from '../../public/images/2.jpg';
import Image3 from '../../public/images/3.jpg';
import Image4 from '../../public/images/4.jpg';

export default function MultipleImageCta() {
  return (
    <div className="relative m-auto max-w-7xl overflow-hidden bg-white lg:flex lg:items-center">
      <div className="z-20 w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          <span className="block">Mother hearth host your travel</span>
        </h2>
        <p className="text-md mt-4 text-gray-400">
          The state of Utah in the united states is home to lots of beautiful
          National parks, Bryce national canion park ranks as three of the most
          magnificient &amp; awe inspiring.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              className="w-full rounded-lg  bg-green-500 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2  focus:ring-offset-green-200 "
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8 p-8 lg:p-24">
        <img src={Image3.src} className="w-1/2 rounded-lg" alt="Tree" />
        <div>
          <img src={Image2.src} className="mb-8 rounded-lg" alt="Tree" />
          <img src={Image4.src} className="rounded-lg" alt="Tree" />
        </div>
      </div>
    </div>
  );
}
