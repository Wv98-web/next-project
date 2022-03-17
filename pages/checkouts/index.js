import React from 'react';

export default function Checkouts() {
  return (
    <div className="flex w-auto max-w-full items-center justify-center bg-gray-100 p-8 text-gray-800">
      <div className="grid w-full max-w-screen-lg gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-sm font-medium">Payment Method</h2>
          <div className="mt-4 rounded bg-white shadow-lg">
            <div className="flex items-center px-8 py-5">
              <input
                className="h-4 w-4 appearance-none rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100"
                type="radio"
              />
              <label className="ml-4 text-sm font-medium">PayPal</label>
            </div>
            <div className="border-t">
              <div className="flex items-center px-8 py-5">
                <input
                  className="h-4 w-4 appearance-none rounded-full border-2 border-white bg-blue-600 ring-2 ring-blue-600 ring-opacity-100"
                  type="radio"
                />
                <label className="ml-4 text-sm font-medium">Credit Card</label>
              </div>
              <div className="grid grid-cols-2 gap-4 px-8 pb-8">
                <div className="col-span-2">
                  <label className="text-xs font-semibold" for="cardNumber">
                    Card number
                  </label>
                  <input
                    className="mt-1 flex h-10 w-full items-center rounded border px-4 text-sm"
                    type="text"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
                <div className="">
                  <label className="text-xs font-semibold" for="cardNumber">
                    Expiry Date
                  </label>
                  <input
                    className="mt-1 flex h-10 w-full items-center rounded border px-4 text-sm"
                    type="text"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="">
                  <label className="text-xs font-semibold" for="cardNumber">
                    CVC/CVV
                  </label>
                  <input
                    className="mt-1 flex h-10 w-full items-center rounded border px-4 text-sm"
                    type="password"
                    placeholder="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-medium">Purchase Summary</h2>
          <div className="mt-4 rounded bg-white py-6 shadow-lg">
            <div className="px-8">
              <div className="flex items-end">
                <select
                  className="-ml-1 text-sm font-medium focus:outline-none"
                  name=""
                  id=""
                >
                  <option value="">Product (Billed Monthly)</option>
                  <option value="">Product (Billed Annually)</option>
                </select>
                <span className="ml-auto text-sm font-semibold">$20</span>
                <span className="mb-px text-xs text-gray-500">/mo</span>
              </div>
              <span className="mt-2 text-xs text-gray-500">
                Save 20% with annual billing
              </span>
            </div>
            <div className="mt-4 px-8">
              <div className="flex items-end justify-between">
                <span className="text-sm font-semibold">Tax</span>
                <span className="mb-px text-sm text-gray-500">10%</span>
              </div>
            </div>
            <div className="mt-4 border-t px-8 pt-4">
              <div className="flex items-end justify-between">
                <span className="font-semibold">Today you pay (AUD)</span>
                <span className="font-semibold">$0</span>
              </div>
              <span className="mt-2 text-xs text-gray-500">
                After 1 month free: $22/mo.
              </span>
            </div>
            <div className="mt-8 flex items-center px-8">
              <input id="termsConditions" type="checkbox" />
              <label
                className="ml-2 text-xs text-gray-500"
                for="termsConditions"
              >
                I agree to the terms and conditions.
              </label>
            </div>
            <div className="flex flex-col px-8 pt-4">
              <button className="flex h-10 w-full items-center justify-center rounded bg-blue-600 text-sm font-medium text-blue-50 hover:bg-blue-700">
                Start Subscription
              </button>
              <button className="mt-3 text-xs text-blue-500 underline">
                Have a coupon code?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
