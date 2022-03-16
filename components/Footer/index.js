import { footerNavigation } from './contants';

function Footer() {
  return (
    <div className="mx-auto max-w-full bg-gray-200">
      <div className="mx-auto max-w-7xl border-b border-gray-400 px-6 pt-8 sm:px-6 lg:flex lg:justify-between lg:px-10">
        {/* navigation */}
        <div className="row-start-1 grid grid-cols-4 gap-y-10 gap-x-8 text-sm lg:w-2/3">
          {footerNavigation.sections.map((section) => (
            <div key={section.name}>
              <p
                id={`${section.name}-heading`}
                className="font-medium text-gray-900"
              >
                {section.name}
              </p>
              <ul
                role="list"
                aria-labelledby={`${section.name}-heading`}
                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
              >
                {section.items.map((item) => (
                  <li key={item.name} className="flex">
                    <a href={item.href} className="hover:text-gray-800">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* info */}
        <div className="flex flex-1 flex-col px-12">
          <div className="ml-4 mb-4 flex lg:ml-0">
            {/* LOGO */}
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>

          {/* segment */}
          <p>
            Making the world a better place through constructing elegant
            hierarchies.
          </p>

          {/* media */}
          <ul className="flex">
            <li className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 7H7v6h6V7z" />
                <path
                  fillRule="evenodd"
                  d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
              </svg>
            </li>
            <li className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
            </li>
            <li className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>

      {/* copyright */}
      <div className="mx-auto flex flex max-w-7xl justify-center p-2">
        <p>&copy;2022 Workflow, Inc. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
