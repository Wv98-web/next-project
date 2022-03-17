import React from 'react';
import { footerNavigation } from './contants';

export default function Footers() {
  return (
    <footer className="mx-auto max-w-full bg-gray-200 pt-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-center text-lg font-bold lg:text-2xl">
          Join 31,000+ other and never miss <br /> out on new tips, tutorials,
          and more.
        </h1>

        <div className="mt-6 flex justify-center">
          <div className="rounded-md border">
            <div className="flex flex-wrap justify-between md:flex-row">
              <input
                type="email"
                className="m-1 appearance-none rounded-md bg-white p-2 text-sm text-gray-700 focus:placeholder-transparent focus:outline-none"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />
              <button className="m-1 w-full transform rounded-md bg-gray-800 px-3 py-2 text-sm font-medium uppercase tracking-wider text-white transition-colors duration-200 hover:bg-gray-700 lg:w-auto">
                subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="border-bottom mt-6 h-px border-gray-300" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col flex-wrap px-5 py-12 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
          <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
            <span className="sr-only">Workflow</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
              alt=""
            />
            <span className="ml-3 text-xl font-bold">My shop</span>
          </a>
          <p className="mt-6 font-medium text-gray-500">
            Making the world a better place through constructing elegant
            hierarchies.
          </p>
        </div>
        <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left">
          {footerNavigation.sections.map((section) => (
            <div
              key={section.name}
              className="mb-4 w-full px-4 md:w-1/2 lg:w-1/4"
            >
              <h2 className="mb-3 text-base font-bold tracking-widest text-black">
                {section.name}
              </h2>
              <ul
                role="list"
                aria-labelledby={`${section.name}-heading`}
                className="mt-3 space-y-3 sm:mt-3 sm:space-y-3"
              >
                {section.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="font-medium text-gray-600 hover:text-black"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-300">
        <div className="mx-auto flex max-w-7xl flex-col flex-wrap py-4 px-5 sm:flex-row">
          <p className="text-center font-medium text-gray-600 sm:text-left">
            © 2022 Next shop
            <a
              href="#"
              rel="noopener noreferrer"
              className="ml-1 text-gray-900"
              target="_blank"
            >
              by WuWei
            </a>
          </p>
          <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a href="#" className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="h-5 w-5"
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

      <style jsx>
        {`
          p {
            margin-bottom: 0;
          }
        `}
      </style>
    </footer>
  );
}
