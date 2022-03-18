import React from 'react';
import Image1 from '../../public/images/1.png';

export default function ImageWithDesc() {
  return (
    <div className="relative m-auto max-w-7xl overflow-hidden bg-white">
      <div className="text-start z-20 w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          <span className="block">Want to be millionaire ?</span>
          <span className="block text-indigo-500">
            It&#x27;s today or never.
          </span>
        </h2>
        <p className="mt-4 text-xl text-gray-400">
          I had noticed that both in the very poor and very rich extremes of
          society the mad were often allowed to mingle freely
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              className="w-full rounded-lg  bg-indigo-600 py-4 px-6 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <img
        src={Image1.src}
        className="max-w-1/2 absolute right-0 top-0 hidden h-full lg:block"
      />
    </div>
  );
}
