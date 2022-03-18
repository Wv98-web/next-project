import React from 'react';
import Image5 from '../../public/images/5.png';
import Image5Webp from '../../public/images/5.webp';

export default function SubWithImage() {
  return (
    <div className="m-auto max-w-7xl bg-white py-10">
      <div className="relative overflow-hidden px-4 py-6 sm:px-6 sm:py-8 lg:p-12 xl:p-16">
        <h2 className="font-display text-2xl font-semibold text-black sm:text-3xl">
          We&#x27;ve got more coming...
        </h2>
        <p className="mt-2 max-w-xl text-base text-gray-400">
          Want to hear from us when we add new components? Sign up for our
          newsletter and we&#x27;ll email you every time we release a new batch
          of components.
        </p>
        <form>
          <div className="jusitfy-start mt-6 sm:flex">
            <form className="flex w-3/4 max-w-sm flex-col justify-center space-y-3 md:w-full md:flex-row md:space-x-3 md:space-y-0">
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Subscribe'
                  className=" w-full flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Email"
                />
              </div>
              <button
                className="flex-shrink-0 rounded-lg bg-purple-600 px-4 py-2 text-base font-semibold text-white shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </form>

        <div className="absolute inset-y-0 right-0 hidden lg:left-2/3 lg:block xl:left-1/2">
          <picture>
            <source srcSet={Image5Webp.src} type="image/webp" />
            <source srcSet={Image5.src} />
            <img
              className="maw-w-44 mx-auto w-1/2 object-cover"
              src={Image5.src}
              alt="shopping item"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
