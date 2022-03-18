import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/outline';
import { Input } from 'antd';

const searchProducts = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
];

export default function SearchComponent() {
  const handleSearch = ({ target }) => {
    console.log(target.value);
  };

  const handleSearchChange = ({ target }) => {
    console.log(target.value);
  };

  return (
    <div>
      <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
        <div className="flex h-full space-x-8">
          <Popover className="flex">
            {({ open }) => (
              <>
                <div className="relative flex">
                  <Popover.Button className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Panel className="absolute inset-x-0 top-full z-40 text-sm text-gray-500">
                    <div
                      className="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    >
                      <div className="relative bg-gray-100">
                        <div className="mx-auto flex max-w-7xl items-center justify-center px-8">
                          <div className="w-2/3 py-16">
                            <Input
                              prefix={
                                <SearchIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              }
                              placeholder=""
                              size="large"
                              allowClear
                              onPressEnter={handleSearch}
                              onChange={handleSearchChange}
                            />

                            <div>
                              {searchProducts.map((product) => {
                                return (
                                  <a
                                    href={product.href}
                                    className="my-2 flex items-center justify-between font-medium text-gray-800 lg:cursor-pointer"
                                    key={product.id}
                                  >
                                    <div className="flex items-center">
                                      <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="block w-14"
                                      />

                                      <div className="ml-4">{product.name}</div>
                                    </div>

                                    <div>{product.price}</div>
                                  </a>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </Popover.Group>
    </div>
  );
}
