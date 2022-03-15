import React, { Component } from 'react';
import Layout from '../../components/layout';

function Collections({ product }) {
  return (
    <>
      <Layout>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Collections
            </h2>

            <div className="z-10 mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <div key={product.pid} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.pimg}
                    alt={product.pname}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.pname}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.pprice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://jx.xuzhixiang.top/ap/api/detail.php?id=${params.slug}`
  );
  const data = await res.json();
  const product = data.data;

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`http://jx.xuzhixiang.top/ap/api/productlist.php`);
  const data = await res.json();
  const productlist = data.data;
  const paths = productlist.map((item) => {
    return {
      params: { slug: item.pid },
    };
  });

  return {
    paths: [...paths],
    fallback: true,
  };
}

export default Collections;
