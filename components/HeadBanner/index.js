import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';

export default function HeadBanner() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Transition
      as={Fragment}
      show={open}
      enter="transition ease-in-out duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in-out duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="sticky top-0 z-30 bg-indigo-900">
        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <span className="flex rounded-lg bg-indigo-800 p-2">
                <SpeakerphoneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 truncate font-medium text-white">
                <span className="md:hidden">We announced a new product!</span>
                <span className="hidden md:inline">
                  Big news! We're excited to announce a brand new product.
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                onClick={handleClose}
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <style jsx>
          {`
            p {
              margin-bottom: 0;
            }
          `}
        </style>
      </div>
    </Transition>
  );
}
