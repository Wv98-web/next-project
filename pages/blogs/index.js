const Blogs = () => {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
        <div>
          <p className="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
            Brand new
          </p>
        </div>
        <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="text-blue-gray-100 absolute top-0 left-0 z-0 -mt-8 -ml-20 hidden w-32 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
            >
              <defs>
                <pattern
                  id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{' '}
          quick, brown fox jumps over a lazy dog
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>

      <div className="grid gap-8 sm:mx-auto sm:max-w-sm lg:max-w-full lg:grid-cols-3">
        <div className="overflow-hidden rounded bg-white shadow-sm transition-shadow duration-300">
          <img
            src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            className="h-64 w-full object-cover"
            alt=""
          />
          <div className="border border-t-0 p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide">
              <a
                href="/"
                className="text-blue-gray-900 hover:text-deep-purple-accent-700 transition-colors duration-200"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </a>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="hover:text-deep-purple-accent-700 mb-3 inline-block text-2xl font-bold leading-5 transition-colors duration-200"
            >
              Visit the East
            </a>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <a
              href="/"
              aria-label=""
              className="text-deep-purple-accent-400 hover:text-deep-purple-800 inline-flex items-center font-semibold transition-colors duration-200"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded bg-white shadow-sm transition-shadow duration-300">
          <img
            src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="h-64 w-full object-cover"
            alt=""
          />
          <div className="border border-t-0 p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide">
              <a
                href="/"
                className="text-blue-gray-900 hover:text-deep-purple-accent-700 transition-colors duration-200"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </a>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Simple is better"
              className="hover:text-deep-purple-accent-700 mb-3 inline-block text-2xl font-bold leading-5 transition-colors duration-200"
            >
              Simple is better
            </a>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <a
              href="/"
              aria-label=""
              className="text-deep-purple-accent-400 hover:text-deep-purple-800 inline-flex items-center font-semibold transition-colors duration-200"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded bg-white shadow-sm transition-shadow duration-300">
          <img
            src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="h-64 w-full object-cover"
            alt=""
          />
          <div className="border border-t-0 p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide">
              <a
                href="/"
                className="text-blue-gray-900 hover:text-deep-purple-accent-700 transition-colors duration-200"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </a>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Film It!"
              className="hover:text-deep-purple-accent-700 mb-3 inline-block text-2xl font-bold leading-5 transition-colors duration-200"
            >
              Film It!
            </a>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <a
              href="/"
              aria-label=""
              className="text-deep-purple-accent-400 hover:text-deep-purple-800 inline-flex items-center font-semibold transition-colors duration-200"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
